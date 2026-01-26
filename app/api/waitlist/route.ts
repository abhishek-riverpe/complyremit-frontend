import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, companyName, transferVolume } = body;

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // TODO: Add your actual waitlist logic here
    // For now, we'll just log and return success
    console.log("Waitlist submission:", { email, companyName, transferVolume });

    // You can integrate with:
    // - Database (Prisma, Drizzle, etc.)
    // - Email service (SendGrid, Resend, etc.)
    // - CRM (HubSpot, Salesforce, etc.)

    return NextResponse.json(
      { success: true, message: "Successfully joined waitlist" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
