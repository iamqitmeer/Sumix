import { type LucideIcon } from 'lucide-react'

export interface Calculator {
  title: string
  href: string
  description: string
  icon: LucideIcon
}

export interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  icon?: LucideIcon
}

