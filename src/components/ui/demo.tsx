import { Feature } from "@/components/ui/feature-with-image"

function FeatureDemo() {
  return (
    <div className="w-full">
      {/* Feature 1: Original layout - Video on left, text on right */}
      <Feature 
        videoSrc="/videos/Proactive_Threat_Detection_Video.mp4"
        badge="AI-Powered"
        title="Proactive Threat Detection"
        subtitle="See threats as they emerge, not after they escalate."
        bulletPoints={[
          "Advanced AI detection identifies firearms, violence, and safety hazards in real-time",
          "Instant visual context prevents false alarms through video verification",
          "Works with existing cameras—no expensive rip-and-replace required",
          "Contextual understanding provides first responders with critical visual intel"
        ]}
      />

      {/* Feature 2: Reversed layout - Text on left, video on right */}
      <Feature 
        videoSrc="/videos/Proactive_Threat_Detection_Video.mp4"
        badge="Smart Analytics"
        title="Real-Time Intelligence"
        subtitle="Transform your security cameras into intelligent guardians."
        bulletPoints={[
          "AI-powered analytics detect anomalies in real-time",
          "Automated alerts and notifications for immediate response",
          "Seamless integration with existing security infrastructure",
          "Advanced machine learning improves accuracy over time"
        ]}
        reverse={true}
      />

      {/* Feature 3: Original layout again - Video on left, text on right */}
      <Feature 
        videoSrc="/videos/Proactive_Threat_Detection_Video.mp4"
        badge="Enterprise Ready"
        title="Scalable Security"
        subtitle="From small businesses to large enterprises, we've got you covered."
        bulletPoints={[
          "Multi-site management with centralized control",
          "Role-based access control for team collaboration",
          "Comprehensive audit trails and compliance reporting",
          "24/7 support and dedicated account management"
        ]}
      />
    </div>
  );
}

export { FeatureDemo };
