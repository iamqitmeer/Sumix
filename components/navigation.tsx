"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Calculator, DollarSign, Activity, Ruler, Brain } from "lucide-react";

const calculators: { title: string; href: string; description: string; icon: React.ReactNode }[] = [
  {
    title: "Scientific Calculator",
    href: "/calculators/scientific",
    description: "Advanced mathematical operations with natural language support",
    icon: <Calculator className="h-6 w-6" />,
  },
  {
    title: "Currency Converter",
    href: "/calculators/currency",
    description: "Real-time exchange rates with AI-powered predictions",
    icon: <DollarSign className="h-6 w-6" />,
  },
  {
    title: "Health & Fitness",
    href: "/calculators/health",
    description: "BMI, calorie tracking, and fitness planning tools",
    icon: <Activity className="h-6 w-6" />,
  },
  {
    title: "Unit Converter",
    href: "/calculators/units",
    description: "Smart conversion tools for all measurement types",
    icon: <Ruler className="h-6 w-6" />,
  },
  {
    title: "Fun & Utility",
    href: "/calculators/fun",
    description: "Engaging calculators for entertainment and daily use",
    icon: <Brain className="h-6 w-6" />,
  },
];

export default function Navigation() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="font-bold text-2xl mr-8 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
          CalcPro
        </Link>
        <NavigationMenu className="flex-1">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Calculators</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                  {calculators.map((calculator) => (
                    <ListItem
                      key={calculator.title}
                      title={calculator.title}
                      href={calculator.href}
                      icon={calculator.icon}
                    >
                      {calculator.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/pricing" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button variant="outline">Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";