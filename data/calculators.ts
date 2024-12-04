import { Calculator, DollarSign, Activity, Ruler, Brain } from 'lucide-react'
import { Calculator as CalculatorType } from "@/types/navigation"

export const calculators: CalculatorType[] = [
  {
    title: "Scientific Calculator",
    href: "/calculators/scientific",
    description: "Advanced mathematical operations with natural language support",
    icon: Calculator,
  },
  {
    title: "Currency Converter",
    href: "/calculators/currency",
    description: "Real-time exchange rates with AI-powered predictions",
    icon: DollarSign,
  },
  {
    title: "Health & Fitness",
    href: "/calculators/health",
    description: "BMI, calorie tracking, and fitness planning tools",
    icon: Activity,
  },
  {
    title: "Unit Converter",
    href: "/calculators/units",
    description: "Smart conversion tools for all measurement types",
    icon: Ruler,
  },
  {
    title: "Fun & Utility",
    href: "/calculators/fun",
    description: "Engaging calculators for entertainment and daily use",
    icon: Brain,
  },
]
