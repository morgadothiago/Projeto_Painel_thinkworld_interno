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
          "group relative transition-all duration-300 ease-out rounded-lg",
          "hover:bg-gradient-to-r hover:from-purple-500/15 hover:to-teal-400/15",
          "hover:border-l-2 hover:border-purple-400/60 hover:translate-x-0.5",
          isActive && [
            "bg-gradient-to-r from-purple-500/20 to-teal-400/20",
            "border-l-4 border-teal-400",
            "shadow-lg shadow-teal-500/25 scale-[1.02]"
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
            "transition-all duration-300 ease-out",
            isActive ? "text-teal-400 scale-110 rotate-3" : "text-gray-400 group-hover:text-purple-400 group-hover:scale-105"
          )}>
            <item.icon className="h-5 w-5" />
          </div>
          <div className="flex-1 flex items-center justify-between">
            <span className={cn(
              "font-medium transition-all duration-300 ease-out",
              isActive ? "text-teal-300 font-semibold" : "text-gray-300 group-hover:text-white group-hover:font-semibold"
            )}>
              {item.title}
            </span>
            {item.badge && (
              <span className={cn(
                "ml-auto px-2.5 py-1 text-xs font-extrabold rounded-full min-w-[24px] flex items-center justify-center",
                "bg-gradient-to-r from-purple-500 via-fuchsia-500 to-teal-500",
                "text-white shadow-xl shadow-purple-500/50",
                "animate-pulse ring-2 ring-purple-400/40 ring-offset-1 ring-offset-neutral-900"
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
