"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Calculator, DollarSign, Activity, Ruler, Brain } from "lucide-react";

const calculatorLinks = [
  {
    title: "Scientific Calculator",
    href: "/calculators/scientific",
    icon: Calculator,
  },
  {
    title: "Currency Converter",
    href: "/calculators/currency",
    icon: DollarSign,
  },
  {
    title: "Health & Fitness",
    href: "/calculators/health",
    icon: Activity,
  },
  {
    title: "Unit Converter",
    href: "/calculators/units",
    icon: Ruler,
  },
  {
    title: "Fun & Utility",
    href: "/calculators/fun",
    icon: Brain,
  },
];

export default function CalculatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <aside className="md:w-64 flex-shrink-0">
          <nav className="space-y-2">
            {calculatorLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Button
                  key={link.href}
                  variant={pathname === link.href ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-2",
                    pathname === link.href && "bg-muted"
                  )}
                  asChild
                >
                  <Link href={link.href}>
                    <Icon className="h-4 w-4" />
                    {link.title}
                  </Link>
                </Button>
              );
            })}
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}