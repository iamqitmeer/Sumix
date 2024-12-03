import { Button } from "@/components/ui/button";
import { Calculator, ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-100 dark:from-purple-950 dark:to-blue-900" />
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
              The Future of Calculation is Here
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Experience the next generation of intelligent calculators powered by AI.
              From scientific computations to financial planning, we've got you covered.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/calculators">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose CalcPro?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Calculator className="h-8 w-8" />}
              title="Advanced Calculations"
              description="From basic arithmetic to complex scientific computations, solve any mathematical challenge with ease."
            />
            <FeatureCard
              icon={<Sparkles className="h-8 w-8" />}
              title="AI-Powered"
              description="Get intelligent suggestions and predictions based on your calculation patterns."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Secure & Reliable"
              description="Your calculations and data are protected with enterprise-grade security."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-500">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Calculations?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who have already upgraded their calculation experience.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/signup">
              Start Free Trial <Zap className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-lg border bg-card">
      <div className="mb-4 text-purple-600 dark:text-purple-400">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}