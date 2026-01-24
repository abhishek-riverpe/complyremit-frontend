import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [transferVolume, setTransferVolume] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const submitMutation = useMutation({
    mutationFn: async (data: { email: string; companyName: string; transferVolume: string }) => {
      return apiRequest("POST", "/api/waitlist", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    submitMutation.mutate({
      email,
      companyName,
      transferVolume,
    });
  };

  const stats = [
    { value: "88%", label: "Average savings" },
    { value: "2 hours", label: "Setup time" },
    { value: "$0", label: "Monthly fees" }
  ];

  return (
    <section id="waitlist-section" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
          Ready to stop overpaying? Let's talk.
        </h2>
        <p className="text-xl mb-8 text-neutral-gray">
          Early access users are saving $100K+ per year. We have 50 spots left this month.
        </p>
        
        <Card className="bg-white shadow-lg border border-gray-200 max-w-2xl mx-auto">
          <CardContent className="p-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white text-gray-900 placeholder-gray-500"
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-secondary text-white hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg whitespace-nowrap"
                    disabled={submitMutation.isPending}
                  >
                    {submitMutation.isPending ? "Joining..." : "Join Waitlist"}
                  </Button>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="text"
                    placeholder="Company name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="flex-1 bg-white text-gray-900 placeholder-gray-500"
                  />
                  <Input
                    type="text"
                    placeholder="Monthly transfer volume (USD)"
                    value={transferVolume}
                    onChange={(e) => setTransferVolume(e.target.value)}
                    className="flex-1 bg-white text-gray-900 placeholder-gray-500"
                  />
                </div>
                
                <p className="text-neutral-gray text-sm">
                  By joining, you agree to receive updates about ComplyRemit. Unsubscribe anytime.
                </p>
              </form>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">You're in. Expect our call.</h3>
                <p className="text-neutral-gray">We'll reach out within 24 hours. Have your last wire transfer receipt ready - we'll show you exactly how much you'll save.</p>
              </div>
            )}
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-neutral-gray font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
