import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "ComplyRemit saved us over $50,000 in the first year alone. The platform is incredibly easy to use and the support team is outstanding.",
      author: "John Smith",
      title: "CFO, TechCorp Inc.",
      initials: "JS"
    },
    {
      text: "Finally, a transfer service that understands business needs. Same-day transfers and transparent pricing have transformed our international operations.",
      author: "Maria Patel",
      title: "Finance Director, Global Solutions",
      initials: "MP"
    },
    {
      text: "The compliance and security features give us complete peace of mind. We can focus on growing our business instead of worrying about transfer regulations.",
      author: "David Lee",
      title: "CEO, Innovation Labs",
      initials: "DL"
    }
  ];

  const colors = ["bg-primary", "bg-secondary", "bg-accent"];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            What Business Leaders Are Saying
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-neutral-gray mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${colors[index]} rounded-full flex items-center justify-center text-white font-bold mr-4`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-neutral-gray">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
