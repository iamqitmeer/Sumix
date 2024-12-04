"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "@react-hook/media-query"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Calculator, Menu, X } from 'lucide-react'
import { calculators } from "@/data/calculators"
import { ListItemProps } from "@/types/navigation"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            initial={{ scale: 0.5, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Calculator className="h-8 w-8 text-primary" />
          </motion.div>
          <span className="hidden bg-gradient-to-r dark:text-zinc-100 text-zinc-900 bg-clip-text text-2xl font-bold text-transparent sm:inline-block">
            Sumix
          </span>
        </Link>

        {isMobile ? (
          <div className="flex items-center">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        ) : (
          <DesktopNavigation />
        )}
      </div>

      <AnimatePresence>
        {mobileMenuOpen && <MobileNavigation onClose={() => setMobileMenuOpen(false)} />}
      </AnimatePresence>
    </header>
  )
}

function DesktopNavigation() {
  return (
    <div className="flex items-center space-x-4">
      <NavigationMenu>
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
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
      <Link href="/login" legacyBehavior passHref>

      <Button>Get Started</Button>
</Link>
    </div>
  )
}

function MobileNavigation({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="absolute left-0 right-0 top-16 bg-background px-4 py-2 shadow-lg"
    >
      <nav className="flex flex-col space-y-2">
        <Link href="/calculators" className="py-2 text-lg font-medium" onClick={onClose}>
          Calculators
        </Link>
        <Link href="/pricing" className="py-2 text-lg font-medium" onClick={onClose}>
          Pricing
        </Link>
        <Link href="/about" className="py-2 text-lg font-medium" onClick={onClose}>
          About
        </Link>
        <div className="flex justify-between pt-4">
          <Button variant="outline" className="w-[48%]" onClick={onClose}>
            Sign In
          </Button>
          <Button className="w-[48%]" onClick={onClose}>
            Get Started
          </Button>
        </div>
      </nav>
    </motion.div>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, icon: Icon, ...props }, ref) => {
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
              {Icon && <Icon className="h-6 w-6" />}
              <div className="text-sm font-medium leading-none">{title}</div>
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"

