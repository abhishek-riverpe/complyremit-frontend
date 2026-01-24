// Using Replit AI Integrations for Gemini access
// Reference: javascript_gemini_ai_integrations blueprint

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_AI_INTEGRATIONS_GEMINI_API_KEY || "",
  httpOptions: {
    apiVersion: "",
    baseUrl: import.meta.env.VITE_AI_INTEGRATIONS_GEMINI_BASE_URL || "",
  },
});

export async function calculateTransferCost(
  amount: number,
  currency: string
): Promise<{
  traditionalCost: string;
  ourCost: string;
  savings: string;
  savingsPercent: number;
}> {
  try {
    const prompt = `Calculate the cost comparison for transferring $${amount} USD to ${currency}:
    1. Traditional banks typically charge 2.5-3% in fees plus $40-50 wire fee
    2. ComplyRemit charges 0.3% flat fee with no hidden costs
    
    Return ONLY a valid JSON object with these exact fields:
    - traditionalCost: total cost in USD as string (e.g., "2540.00")
    - ourCost: total cost in USD as string (e.g., "300.00")
    - savings: amount saved in USD as string (e.g., "2240.00")
    - savingsPercent: percentage saved as number (e.g., 88)
    
    Use 2.5% for traditional bank fees plus $40 wire fee for calculations.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = response.text || "";
    
    // Extract JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
    
    // Fallback to manual calculation if parsing fails
    throw new Error("Could not parse AI response");
  } catch (error) {
    // Fallback calculation
    const traditionalCost = amount * 0.025 + 40;
    const ourCost = amount * 0.003; // 0.3% flat fee
    const saved = traditionalCost - ourCost;
    
    return {
      traditionalCost: traditionalCost.toFixed(2),
      ourCost: ourCost.toFixed(2),
      savings: saved.toFixed(2),
      savingsPercent: Math.round((saved / traditionalCost) * 100)
    };
  }
}

export async function getTransferInsights(
  amount: number,
  fromCountry: string,
  toCountry: string
): Promise<string> {
  try {
    const prompt = `Provide a brief, conversational insight about transferring $${amount} from ${fromCountry} to ${toCountry}. 
    Keep it under 30 words, friendly and helpful. Focus on timing, regulations, or savings tips.
    Context: We offer 0.3% flat fees with optional instant payment upgrades.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text || "Transfer funds globally with confidence. Save up to 90% on fees with instant payment options available.";
  } catch (error) {
    return "Transfer funds globally with confidence. Save up to 90% on fees with instant payment options available.";
  }
}