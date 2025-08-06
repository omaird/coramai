import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hero } from "@/components/ui/hero";
import { MarqueeDemo } from "@/components/ui/marquee-demo";
import { FeatureDemo } from "@/components/ui/demo";
import { 
  Search, 
  Shield, 
  Camera, 
  Users, 
  Download, 
  Share, 
  Clock, 
  Lock,
  Zap,
  Eye,
  FileText,
  CheckCircle,
  Star,
  Menu,
  ChevronDown
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-black backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-white">Coram</div>
            </div>
            <nav className="hidden md:flex space-x-8 text-white">
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300">
                <span>Product</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300">
                <span>Solutions</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <span className="cursor-pointer hover:text-gray-300">Pricing</span>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-300">
                <span>Partner</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-white hover:text-gray-300 hover:bg-gray-800">Log In</Button>
              <Button className="bg-white text-black hover:bg-gray-100">Try for free</Button>
              <Button className="md:hidden text-white" variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Hero
        title="Close the Response Gap From Alert to Action"
        subtitle="From Threat Detection to Coordinated Resolution in Seconds"
        description="Coram transforms your cameras from passive recorders into active responders. When every second counts, ensure every threat demands instant action."
        actions={[
          {
            label: "Try for Free",
            href: "#",
            variant: "default"
          },
          {
            label: "Book Demo",
            href: "#",
            variant: "outline"
          }
        ]}
        titleClassName="text-4xl sm:text-5xl lg:text-6xl font-bold"
        subtitleClassName="text-xl max-w-3xl font-bold text-black"
        descriptionClassName="text-lg text-gray-600 max-w-3xl mt-4"
        actionsClassName="mt-8"
      />

      {/* Logo Marquee */}
      <MarqueeDemo />

      {/* Feature Component */}
      <FeatureDemo />

      {/* Features Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Badge variant="secondary" className="px-4 py-2">AI Based Search</Badge>
            <Badge variant="secondary" className="px-4 py-2">Dashboard & Analytics</Badge>
            <Badge variant="secondary" className="px-4 py-2">Incident Management</Badge>
            <Badge variant="secondary" className="px-4 py-2">Security and Integrations</Badge>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Search in seconds with Discover
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                With Discover, type what you want, and get the video clip in seconds. 
                It&apos;s ChatGPT built right into video search.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
              <Search className="h-24 w-24 text-blue-600" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center order-2 md:order-1">
              <Users className="h-24 w-24 text-blue-600" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Track journey of people and assets
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Automatically search for the same person or asset across multiple cameras. 
                See how they traveled across the facility and archive the clips.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Fast video scrubbing
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Do you know the scene you&apos;re looking for? Scrub video clips quickly 
                with modern-style thumbnails and fast video loading.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
              <Zap className="h-24 w-24 text-blue-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { icon: Search, title: "Search in seconds" },
              { icon: Share, title: "Share via SMS or email" },
              { icon: Shield, title: "Proactive alerts" },
              { icon: Eye, title: "Custom walls & kiosks" },
              { icon: Clock, title: "10 minutes setup" },
              { icon: Camera, title: "Supports 100+ IP cameras" },
              { icon: Lock, title: "SOC 2 Type II" },
              { icon: Download, title: "Up to 90 days of storage" },
              { icon: Users, title: "Role based access control" },
              { icon: CheckCircle, title: "Live support" },
              { icon: FileText, title: "People analytics" },
              { icon: Star, title: "Unlimited video archiving" }
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <feature.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <p className="font-medium">{feature.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {[
              {
                question: "Can I add more users to the Coram AI dashboard?",
                answer: "Yes! You can add as many users as you'd like at no extra cost. As well as restrict access to only specific cameras using our roles based access control (RBAC) feature."
              },
              {
                question: "How long does it take to set up Coram AI?",
                answer: "Aside from IP camera installation, just 10 minutes to setup Coram Point! Coram AI software automatically detects the IP cameras on your network and shows them on the cloud dashboard, from where they can be enabled."
              },
              {
                question: "What advantages does Coram AI offer over proprietary closed cameras?",
                answer: "Coram has an open architecture, allowing you to integrate any IP camera and most industry-leading access controls. We do not vendor lock customers in proprietary IP camera hardware."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-left">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{faq.answer}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-4">Coram</div>
              <Button className="mb-4">Book a Demo</Button>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Platform</li>
                <li>Cameras</li>
                <li>Coram Point</li>
                <li>Emergency</li>
                <li>Access Control</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Industries</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Warehouse</li>
                <li>Manufacturing</li>
                <li>Healthcare</li>
                <li>Education</li>
                <li>Cannabis</li>
                <li>Cities</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Blog</li>
                <li>Security</li>
                <li>Product Updates</li>
                <li>Help Center</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            Copyright © 2025 Coram AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
