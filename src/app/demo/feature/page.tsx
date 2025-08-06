import { FeatureDemo } from "@/components/ui/feature-demo";

export default function FeaturePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Feature Component Demo</h1>
        <FeatureDemo />
      </div>
    </div>
  );
}
