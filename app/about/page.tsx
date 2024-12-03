import { Card } from "@/components/ui/card";
import { Calculator, Shield, Zap, Users, Globe, Code } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            About CalcPro
          </h1>
          <p className="text-xl text-muted-foreground">
            Redefining calculation tools for the modern web
          </p>
        </div>

        <div className="grid gap-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground">
              CalcPro aims to revolutionize how people perform calculations online by providing
              intelligent, user-friendly tools that combine accuracy with modern design. We believe
              that powerful calculation tools should be accessible to everyone, from students to
              professionals.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {feature.icon}
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
            <p className="text-muted-foreground mb-4">
              Built with cutting-edge technologies to ensure reliability, speed, and a great user experience:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Next.js for lightning-fast performance</li>
              <li>Tailwind CSS for beautiful, responsive design</li>
              <li>TypeScript for type-safe code</li>
              <li>Modern React patterns and hooks</li>
              <li>Real-time calculations and updates</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Precision & Accuracy",
    description: "Our calculators use advanced algorithms to ensure precise results for all your calculations.",
    icon: <Calculator className="h-6 w-6 text-purple-500" />,
  },
  {
    title: "Security First",
    description: "Your data privacy and security are our top priorities, with enterprise-grade protection.",
    icon: <Shield className="h-6 w-6 text-blue-500" />,
  },
  {
    title: "Lightning Fast",
    description: "Experience instant calculations with our optimized performance architecture.",
    icon: <Zap className="h-6 w-6 text-yellow-500" />,
  },
  {
    title: "Global Accessibility",
    description: "Available worldwide with support for multiple languages and number formats.",
    icon: <Globe className="h-6 w-6 text-green-500" />,
  },
  {
    title: "Community Driven",
    description: "Built with feedback from users like you, constantly evolving to meet your needs.",
    icon: <Users className="h-6 w-6 text-red-500" />,
  },
  {
    title: "Open Standards",
    description: "Following industry best practices and open standards for maximum compatibility.",
    icon: <Code className="h-6 w-6 text-indigo-500" />,
  },
];