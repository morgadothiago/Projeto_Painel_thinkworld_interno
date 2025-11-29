"use client"

import { useSidebar } from "@/components/ui/sidebar"
import { useEffect } from "react"

export function MobileSidebarOverlay() {
  const { open, setOpen, isMobile } = useSidebar()

  useEffect(() => {
    if (!isMobile) return

    const handleResize = () => {
      if (window.innerWidth > 768 && open) {
        // Don't close on desktop
        return
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [open, isMobile])

  if (!isMobile || !open) return null

  return (
    <div
      className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-fade-in lg:hidden"
      onClick={() => setOpen(false)}
      aria-hidden="true"
    />
  )
}
