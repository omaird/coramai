import { Badge } from "@/components/ui/badge";

interface FeatureProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  bulletPoints?: string[];
  videoSrc?: string;
  imageSrc?: string;
  reverse?: boolean;
}

function Feature({ 
  badge = "AI-Powered",
  title = "Proactive Threat Detection",
  subtitle = "See threats as they emerge, not after they escalate.",
  bulletPoints = [
    "Advanced AI detection identifies firearms, violence, and safety hazards in real-time",
    "Instant visual context prevents false alarms through video verification",
    "Works with existing cameras—no expensive rip-and-replace required",
    "Contextual understanding provides first responders with critical visual intel"
  ],
  videoSrc,
  imageSrc,
  reverse = false
}: FeatureProps) {
  return (
    <div className="w-full py-10 lg:py-20">
      <div className="container mx-auto">
        <div className={`flex flex-col-reverse lg:flex-row gap-10 lg:items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <div className="w-full aspect-video h-full flex-1 rounded-md overflow-hidden">
            {videoSrc ? (
              <video 
                className="w-full h-full object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : imageSrc ? (
              <div 
                className="w-full h-full bg-cover bg-center rounded-md"
                style={{ backgroundImage: `url('${imageSrc}')` }}
              ></div>
            ) : (
              <div className="w-full h-full bg-muted rounded-md"></div>
            )}
          </div>
          <div className={`flex gap-4 flex-col flex-1 ${reverse ? 'lg:pr-20' : 'lg:pl-20'}`}>
            <div>
              <Badge>{badge}</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                {title}
              </h2>
              <p className="text-base max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                {subtitle}
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              {bulletPoints.map((point, index) => (
                <p key={index} className="text-sm text-muted-foreground">
                  • {point}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
