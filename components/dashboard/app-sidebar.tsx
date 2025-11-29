"use client"

import * as React from "react"
import {
    AudioWaveform,
    BadgeCheck,
    Bell,
    BookOpen,
    Bot,
    ChevronRight,
    ChevronsUpDown,
    Command,
    CreditCard,
    Folder,
    Forward,
    Frame,
    GalleryVerticalEnd,
    LogOut,
    Map,
    MoreHorizontal,
    PieChart,
    Plus,
    Settings2,
    Sparkles,
    SquareTerminal,
    Trash2,
    User,
    Zap,
} from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import { useAuth } from "@/components/providers/auth-context"
import { menuAdmin, menuColaborator } from "@/lib/menuItem"
import Link from "next/link"
import { usePathname } from "next/navigation"

// Mock data for teams
const data = {
    teams: [
        {
            name: "Think World",
            logo: Zap,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { user, role, logout } = useAuth()
    const pathname = usePathname()
    const [activeTeam, setActiveTeam] = React.useState(data.teams[0])

    // Combine menu items based on role
    const menuItems = role === "admin" ? menuAdmin : menuColaborator

    return (
        <Sidebar collapsible="icon" className="border-r border-white/10" {...props}>
            <SidebarHeader className="border-b border-white/10">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="data-[state=open]:bg-white/10 hover:bg-white/10 transition-all duration-200"
                                >
                                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-teal-400 text-sidebar-primary-foreground shadow-lg">
                                        <activeTeam.logo className="size-4 text-white" />
                                    </div>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold text-white">
                                            {activeTeam.name}
                                        </span>
                                        <span className="truncate text-xs text-gray-400">{activeTeam.plan}</span>
                                    </div>

                                </SidebarMenuButton>
                            </DropdownMenuTrigger>

                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="gap-0">
                <SidebarGroup>
                    <SidebarGroupLabel className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Plataforma</SidebarGroupLabel>
                    <SidebarMenu>
                        {menuItems.map((item) => {
                            const isActive = pathname === item.path
                            return (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={isActive}
                                        tooltip={item.title}
                                        className={`
                       transition-all duration-200 
                       hover:bg-white/10 
                       ${isActive ? 'bg-gradient-to-r from-purple-500/20 to-teal-400/20 border-l-2 border-teal-400' : ''}
                     `}
                                    >
                                        <Link href={item.path}>
                                            <item.icon className={`transition-colors duration-200 ${isActive ? "text-teal-400" : "text-gray-400"}`} />
                                            <span className={`transition-colors duration-200 ${isActive ? "text-teal-400 font-medium" : "text-gray-300"}`}>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        })}
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarGroup className="group-data-[collapsible=icon]:hidden mt-4">
                    <SidebarGroupLabel className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Projetos</SidebarGroupLabel>
                    <SidebarMenu>
                        {data.projects.map((item) => (
                            <SidebarMenuItem key={item.name}>
                                <SidebarMenuButton asChild className="hover:bg-white/10 transition-all duration-200">
                                    <a href={item.url}>
                                        <item.icon className="text-gray-400" />
                                        <span className="text-gray-300">{item.name}</span>
                                    </a>
                                </SidebarMenuButton>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <SidebarMenuAction showOnHover className="hover:bg-white/10">
                                            <MoreHorizontal />
                                            <span className="sr-only">More</span>
                                        </SidebarMenuAction>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        className="w-48 rounded-lg bg-neutral-900/95 backdrop-blur-xl border-white/10"
                                        side="bottom"
                                        align="end"
                                    >
                                        <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                                            <Folder className="text-muted-foreground" />
                                            <span>View Project</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                                            <Forward className="text-muted-foreground" />
                                            <span>Share Project</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator className="bg-white/10" />
                                        <DropdownMenuItem className="hover:bg-white/10 cursor-pointer">
                                            <Trash2 className="text-muted-foreground" />
                                            <span>Delete Project</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </SidebarMenuItem>
                        ))}
                        <SidebarMenuItem>
                            <SidebarMenuButton className="text-sidebar-foreground/70 hover:bg-white/10 transition-all duration-200">
                                <MoreHorizontal className="text-sidebar-foreground/70" />
                                <span>More</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="border-t border-white/10">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="data-[state=open]:bg-white/10 hover:bg-white/10 transition-all duration-200"
                                >
                                    <Avatar className="h-8 w-8 rounded-lg ring-2 ring-purple-500/20">
                                        <AvatarImage src={user?.image || ""} alt={user?.name || ""} />
                                        <AvatarFallback className="rounded-lg bg-gradient-to-br from-purple-600 to-teal-500 text-white font-bold">
                                            {user?.name?.[0] || "U"}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-semibold text-white">{user?.name || "User"}</span>
                                        <span className="truncate text-xs text-gray-400">{user?.email}</span>
                                    </div>
                                    <ChevronsUpDown className="ml-auto size-4 text-gray-400" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg bg-neutral-900/95 backdrop-blur-xl border-white/10"
                                side="bottom"
                                align="end"
                                sideOffset={4}
                            >
                                <DropdownMenuLabel className="font-normal p-0">
                                    <div className="flex items-center gap-3 px-3 py-3 border-b border-white/10">
                                        <Avatar className="h-12 w-12 border-2 border-purple-500/50">
                                            <AvatarImage src={user?.image || ""} alt={user?.name || ""} />
                                            <AvatarFallback className="bg-gradient-to-br from-purple-600 to-teal-600 text-white font-bold">
                                                {user?.name?.[0] || "U"}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col flex-1 min-w-0">
                                            <p className="text-sm font-semibold text-white truncate">{user?.name || "User"}</p>
                                            <p className="text-xs text-gray-400 truncate">{user?.email}</p>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator className="bg-white/10 my-0" />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-teal-500/20 cursor-pointer text-white py-3 px-3 group">
                                        <Sparkles className="mr-3 h-4 w-4 text-teal-400 group-hover:text-teal-300" />
                                        <span className="font-medium">Upgrade to Pro</span>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator className="bg-white/10" />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem className="hover:bg-white/10 cursor-pointer text-gray-300 hover:text-white py-2.5 px-3">
                                        <User className="mr-3 h-4 w-4 text-purple-400" />
                                        <span>Account</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-white/10 cursor-pointer text-gray-300 hover:text-white py-2.5 px-3">
                                        <CreditCard className="mr-3 h-4 w-4 text-blue-400" />
                                        <span>Billing</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-white/10 cursor-pointer text-gray-300 hover:text-white py-2.5 px-3">
                                        <Bell className="mr-3 h-4 w-4 text-teal-400" />
                                        <span>Notifications</span>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator className="bg-white/10" />
                                <DropdownMenuItem
                                    onClick={() => logout({ callbackUrl: "/login" })}
                                    className="hover:bg-red-500/20 cursor-pointer text-red-400 hover:text-red-300 py-2.5 px-3 font-medium"
                                >
                                    <LogOut className="mr-3 h-4 w-4" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
