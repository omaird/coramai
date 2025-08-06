import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "AI-Powered Search",
      description:
        "Search through video footage using natural language. Find specific events, people, or objects in seconds.",
      icon: <IconTerminal2 className="text-black" />,
    },
    {
      title: "Real-time Alerts",
      description:
        "Get instant notifications when suspicious activity is detected. Respond to threats before they escalate.",
      icon: <IconEaseInOut className="text-black" />,
    },
    {
      title: "Cost-Effective Solution",
      description:
        "No expensive proprietary hardware required. Works with your existing IP cameras and infrastructure.",
      icon: <IconCurrencyDollar className="text-black" />,
    },
    {
      title: "Cloud-Based Reliability",
      description: "99.9% uptime guarantee with secure cloud storage and automatic backups.",
      icon: <IconCloud className="text-black" />,
    },
    {
      title: "Multi-Camera Tracking",
      description: "Track people and assets across multiple cameras with seamless integration.",
      icon: <IconRouteAltLeft className="text-black" />,
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock technical support and customer service to ensure your security system never fails.",
      icon: <IconHelp className="text-black" />,
    },
    {
      title: "Quick Setup",
      description:
        "Get up and running in just 10 minutes. Automatic camera detection and configuration.",
      icon: <IconAdjustmentsBolt className="text-black" />,
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive reporting and analytics to optimize your security operations.",
      icon: <IconHeart className="text-black" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
