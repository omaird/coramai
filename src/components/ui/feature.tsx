import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div className="w-full py-6 lg:py-12">
      <div className="container mx-auto">
        <div className="grid border rounded-lg container p-4 grid-cols-1 gap-4 items-center lg:grid-cols-2">
          <div className="flex gap-3 flex-col">
            <div className="flex gap-2 flex-col">
              <div>
                <Badge variant="outline" className="text-xs">AI-Powered</Badge>
              </div>
              <div className="flex gap-1 flex-col">
                <h2 className="text-lg lg:text-xl tracking-tighter max-w-xl text-left font-regular">
                  Visual Intelligence
                </h2>
                <p className="text-sm leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  Proactive Threat Detection
                </p>
                <p className="text-xs leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  See threats as they emerge, not after they escalate.
                </p>
              </div>
            </div>
            <div className="grid lg:pl-2 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-2">
              <div className="flex flex-row gap-2 items-start">
                <Check className="w-3 h-3 mt-0.5 text-primary" />
                <div className="flex flex-col gap-0.5">
                  <p className="text-xs">Advanced AI detection identifies firearms, violence, and safety hazards in real-time</p>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start">
                <Check className="w-3 h-3 mt-0.5 text-primary" />
                <div className="flex flex-col gap-0.5">
                  <p className="text-xs">Instant visual context prevents false alarms through video verification</p>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start">
                <Check className="w-3 h-3 mt-0.5 text-primary" />
                <div className="flex flex-col gap-0.5">
                  <p className="text-xs">Works with existing cameras—no expensive rip-and-replace required</p>
                </div>
              </div>
              <div className="flex flex-row gap-2 items-start">
                <Check className="w-3 h-3 mt-0.5 text-primary" />
                <div className="flex flex-col gap-0.5">
                  <p className="text-xs">Contextual understanding provides first responders with critical visual intel</p>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-xs font-medium text-primary">
                Traditional cameras watch. Coram acts.
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square flex items-center justify-center">
            <div className="text-center p-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs text-muted-foreground">AI Video Analytics Dashboard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
