import { AlertTriangle, Clock, FileText } from "lucide-react";

export default function ProblemSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-display-md lg:text-display-lg text-gray-900 mb-6">
            Cross-Border Transfers Shouldn't Break Your Budget
          </h2>
          <p className="text-body-lg text-neutral-gray max-w-3xl mx-auto">
            US businesses lose thousands annually on expensive international transfers. Traditional banks charge excessive fees and offer poor exchange rates.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
              alt="Global business connectivity" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-heading-lg text-gray-900 mb-2">High Transfer Fees</h3>
                  <p className="text-body-md text-neutral-gray">Banks charge 3-5% fees plus currency exchange costs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-heading-lg text-gray-900 mb-2">Slow Processing</h3>
                  <p className="text-body-md text-neutral-gray">Traditional transfers take 3-7 business days to complete</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-heading-lg text-gray-900 mb-2">Complex Compliance</h3>
                  <p className="text-body-md text-neutral-gray">Endless paperwork and unclear regulatory requirements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
