import { Badge } from "@/components/ui/badge";

export default function ComparisonSection() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            See Your Potential Savings
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
            Compare what you're paying now vs. what you could save with ComplyRemit
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Traditional Method */}
            <div className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Traditional Banks</h3>
                <div className="text-4xl font-bold text-red-600 mb-2">$3,500</div>
                <p className="text-neutral-gray">Cost to transfer $100,000</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-gray">Transfer Fee (2.5%)</span>
                  <span className="font-semibold">$2,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-gray">Exchange Rate Markup</span>
                  <span className="font-semibold">$1,000</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-gray">Processing Time</span>
                    <span className="font-semibold text-red-600">3-7 days</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* ComplyRemit */}
            <div className="p-8 lg:p-12 gradient-secondary text-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">ComplyRemit</h3>
                <div className="text-4xl font-bold mb-2">$1,200</div>
                <p className="text-green-100">Cost to transfer $100,000</p>
                <Badge className="bg-green-800 bg-opacity-50 text-white mt-4">
                  Save $2,300 (66%)
                </Badge>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-green-100">Transfer Fee (0.8%)</span>
                  <span className="font-semibold">$800</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-100">Exchange Rate Markup</span>
                  <span className="font-semibold">$400</span>
                </div>
                <div className="border-t border-green-400 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-green-100">Processing Time</span>
                    <span className="font-semibold">Same day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
