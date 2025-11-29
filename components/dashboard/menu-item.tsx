"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon } from "lucide-react"
import { SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

export interface MenuItem {
  title: string
  path: string
  icon: LucideIcon
  badge?: string | number
  description?: string
  disabled?: boolean
}

interface MenuItemComponentProps {
  item: MenuItem
  tooltip?: boolean
}

export function MenuItemComponent({ item, tooltip = true }: MenuItemComponentProps) {
  const pathname = usePathname()
  const isActive = pathname === item.path
  const { setOpen, isMobile } = useSidebar()

  const handleClick = () => {
    if (isMobile) {
      setOpen(false)
    }
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={isActive}
        tooltip={tooltip ? item.title : undefined}
        disabled={item.disabled}
        className={cn(
          "group relative transition-all duration-300 ease-in-out",
          "hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-teal-400/10",
          "hover:border-l-2 hover:border-purple-400/50",
          isActive && [
            "bg-gradient-to-r from-purple-500/20 to-teal-400/20",
            "border-l-4 border-teal-400",
            "shadow-lg shadow-teal-500/20"
          ],
          item.disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        <Link
          href={item.disabled ? "#" : item.path}
          className="flex items-center gap-3 w-full"
          onClick={handleClick}
        >
          <div className={cn(
            "transition-all duration-300",
            isActive ? "text-teal-400 scale-110" : "text-gray-400 group-hover:text-purple-400"
          )}>
            <item.icon className="h-5 w-5" />
          </div>
          <div className="flex-1 flex items-center justify-between">
            <span className={cn(
              "font-medium transition-all duration-300",
              isActive ? "text-teal-300 font-semibold" : "text-gray-300 group-hover:text-white"
            )}>
              {item.title}
            </span>
            {item.badge && (
              <span className={cn(
                "ml-auto px-2 py-0.5 text-xs font-bold rounded-full",
                "bg-gradient-to-r from-purple-500 to-teal-500",
                "text-white shadow-lg shadow-purple-500/30",
                "animate-pulse"
              )}>
                {item.badge}
              </span>
            )}
          </div>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
