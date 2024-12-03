import { Card } from "@/components/ui/card";
import { Calculator, DollarSign, Activity, Ruler, Brain } from "lucide-react";
import Link from "next/link";

const calculators = [
  {
    title: "Scientific Calculator",
    description: "Advanced mathematical operations with natural language support",
    href: "/calculators/scientific",
    icon: Calculator,
  },
  {
    title: "Currency Converter",
    description: "Real-time exchange rates with AI-powered predictions",
    href: "/calculators/currency",
    icon: DollarSign,
  },
  {
    title: "Health & Fitness",
    description: "BMI, calorie tracking, and fitness planning tools",
    href: "/calculators/health",
    icon: Activity,
  },
  {
    title: "Unit Converter",
    description: "Smart conversion tools for all measurement types",
    href: "/calculators/units",
    icon: Ruler,
  },
  {
    title: "Fun & Utility",
    description: "Engaging calculators for entertainment and daily use",
    href: "/calculators/fun",
    icon: Brain,
  },
];

export default function CalculatorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Calculators</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculators.map((calc) => {
          const Icon = calc.icon;
          return (
            <Link key={calc.href} href={calc.href}>
              <Card className="p-6 h-full hover:shadow-lg transition-shadow cursor-pointer">
                <Icon className="h-8 w-8 mb-4 text-purple-600 dark:text-purple-400" />
                <h2 className="text-xl font-semibold mb-2">{calc.title}</h2>
                <p className="text-muted-foreground">{calc.description}</p>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}