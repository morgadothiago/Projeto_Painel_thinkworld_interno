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
import { MenuItemComponent } from "@/components/dashboard/menu-item"
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
        <Sidebar
            collapsible="icon"
            className="border-r border-white/5 backdrop-blur-xl bg-gradient-to-b from-neutral-950/95 to-neutral-900/95"
            variant="sidebar"
            {...props}
        >
            <SidebarHeader className="border-b border-white/5 bg-gradient-to-r from-purple-950/30 to-neutral-900/30 backdrop-blur-sm">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="data-[state=open]:bg-gradient-to-r data-[state=open]:from-purple-500/20 data-[state=open]:to-teal-400/20 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-teal-400/10 transition-all duration-300 group"
                                >
                                    <div className="flex aspect-square size-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-purple-600 to-teal-400 text-sidebar-primary-foreground shadow-xl shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-105">
                                        <activeTeam.logo className="size-5 text-white drop-shadow-lg" />
                                    </div>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-bold text-white group-hover:text-purple-200 transition-colors">
                                            {activeTeam.name}
                                        </span>
                                        <span className="truncate text-xs text-teal-400 font-medium">{activeTeam.plan}</span>
                                    </div>

                                </SidebarMenuButton>
                            </DropdownMenuTrigger>

                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="gap-0 overflow-y-auto">
                <SidebarGroup className="px-0">
                    <SidebarGroupLabel className="px-4 py-3 text-xs font-bold text-purple-300 uppercase tracking-widest flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-purple-400 animate-pulse" />
                        Menu Principal
                    </SidebarGroupLabel>
                    <SidebarMenu className="gap-1 px-2">
                        {menuItems.map((item) => (
                            <MenuItemComponent key={item.title} item={item} />
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarGroup className="group-data-[collapsible=icon]:hidden mt-4 px-0">
                    <SidebarGroupLabel className="px-4 py-3 text-xs font-bold text-purple-300 uppercase tracking-widest flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-teal-400 animate-pulse" />
                        Projetos Recentes
                    </SidebarGroupLabel>
                    <SidebarMenu className="gap-1 px-2">
                        {data.projects.map((item) => (
                            <SidebarMenuItem key={item.name}>
                                <SidebarMenuButton asChild className="hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-teal-400/10 transition-all duration-300 group">
                                    <a href={item.url}>
                                        <item.icon className="text-gray-400 group-hover:text-purple-400 transition-colors h-5 w-5" />
                                        <span className="text-gray-300 group-hover:text-white transition-colors font-medium">{item.name}</span>
                                    </a>
                                </SidebarMenuButton>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <SidebarMenuAction showOnHover className="hover:bg-purple-500/20 transition-all duration-200">
                                            <MoreHorizontal className="h-4 w-4" />
                                            <span className="sr-only">More</span>
                                        </SidebarMenuAction>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        className="w-48 rounded-xl bg-neutral-900/98 backdrop-blur-xl border-white/10 shadow-2xl shadow-purple-500/10"
                                        side="bottom"
                                        align="end"
                                    >
                                        <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-teal-400/20 cursor-pointer rounded-lg transition-all">
                                            <Folder className="text-purple-400" />
                                            <span>Ver Projeto</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-teal-400/20 cursor-pointer rounded-lg transition-all">
                                            <Forward className="text-teal-400" />
                                            <span>Compartilhar</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator className="bg-white/10" />
                                        <DropdownMenuItem className="hover:bg-red-500/20 cursor-pointer rounded-lg transition-all text-red-400">
                                            <Trash2 />
                                            <span>Deletar</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </SidebarMenuItem>
                        ))}
                        <SidebarMenuItem>
                            <SidebarMenuButton className="text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-teal-400/10 transition-all duration-300 group">
                                <Plus className="text-gray-400 group-hover:text-teal-400 h-5 w-5 transition-colors" />
                                <span className="font-medium">Novo Projeto</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="border-t border-white/5 bg-gradient-to-r from-purple-950/30 to-neutral-900/30 backdrop-blur-sm">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton
                                    size="lg"
                                    className="data-[state=open]:bg-gradient-to-r data-[state=open]:from-purple-500/20 data-[state=open]:to-teal-400/20 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-teal-400/10 transition-all duration-300 group"
                                >
                                    <Avatar className="h-9 w-9 rounded-xl ring-2 ring-purple-500/30 group-hover:ring-purple-500/50 transition-all duration-300 group-hover:scale-105">
                                        <AvatarImage src={user?.image || ""} alt={user?.name || ""} />
                                        <AvatarFallback className="rounded-xl bg-gradient-to-br from-purple-600 via-purple-700 to-teal-500 text-white font-bold text-base shadow-lg">
                                            {user?.name?.[0] || "U"}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="grid flex-1 text-left text-sm leading-tight">
                                        <span className="truncate font-bold text-white group-hover:text-purple-200 transition-colors">{user?.name || "User"}</span>
                                        <span className="truncate text-xs text-teal-400 font-medium">{user?.email}</span>
                                    </div>
                                    <ChevronsUpDown className="ml-auto size-4 text-gray-400 group-hover:text-purple-300 transition-colors" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-xl bg-neutral-900/98 backdrop-blur-xl border-white/10 shadow-2xl shadow-purple-500/20"
                                side="bottom"
                                align="end"
                                sideOffset={4}
                            >
                                <DropdownMenuLabel className="font-normal p-0">
                                    <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10 bg-gradient-to-r from-purple-950/30 to-neutral-900/30">
                                        <Avatar className="h-14 w-14 rounded-xl border-2 border-purple-500/50 shadow-lg shadow-purple-500/20">
                                            <AvatarImage src={user?.image || ""} alt={user?.name || ""} />
                                            <AvatarFallback className="rounded-xl bg-gradient-to-br from-purple-600 via-purple-700 to-teal-600 text-white font-bold text-lg">
                                                {user?.name?.[0] || "U"}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col flex-1 min-w-0">
                                            <p className="text-sm font-bold text-white truncate">{user?.name || "User"}</p>
                                            <p className="text-xs text-teal-400 truncate font-medium">{user?.email}</p>
                                            <p className="text-xs text-purple-300 mt-1 font-semibold uppercase">{role === "admin" ? "Administrador" : "Colaborador"}</p>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator className="bg-white/10 my-0" />
                                <DropdownMenuGroup className="p-1">
                                    <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-teal-500/20 cursor-pointer text-white py-3 px-3 group rounded-lg transition-all">
                                        <Sparkles className="mr-3 h-5 w-5 text-teal-400 group-hover:text-teal-300 group-hover:scale-110 transition-all" />
                                        <span className="font-semibold">Upgrade para Pro</span>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator className="bg-white/10" />
                                <DropdownMenuGroup className="p-1">
                                    <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-purple-500/5 cursor-pointer text-gray-300 hover:text-white py-2.5 px-3 rounded-lg transition-all">
                                        <User className="mr-3 h-4 w-4 text-purple-400" />
                                        <span className="font-medium">Minha Conta</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-teal-500/10 hover:to-teal-500/5 cursor-pointer text-gray-300 hover:text-white py-2.5 px-3 rounded-lg transition-all">
                                        <CreditCard className="mr-3 h-4 w-4 text-blue-400" />
                                        <span className="font-medium">Pagamentos</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-teal-500/10 hover:to-teal-500/5 cursor-pointer text-gray-300 hover:text-white py-2.5 px-3 rounded-lg transition-all">
                                        <Bell className="mr-3 h-4 w-4 text-teal-400" />
                                        <span className="font-medium">Notificações</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-purple-500/5 cursor-pointer text-gray-300 hover:text-white py-2.5 px-3 rounded-lg transition-all">
                                        <Settings2 className="mr-3 h-4 w-4 text-purple-400" />
                                        <span className="font-medium">Configurações</span>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator className="bg-white/10" />
                                <div className="p-1">
                                    <DropdownMenuItem
                                        onClick={() => logout({ callbackUrl: "/login" })}
                                        className="hover:bg-red-500/20 cursor-pointer text-red-400 hover:text-red-300 py-2.5 px-3 font-semibold rounded-lg transition-all group"
                                    >
                                        <LogOut className="mr-3 h-4 w-4 group-hover:scale-110 transition-transform" />
                                        <span>Sair da Conta</span>
                                    </DropdownMenuItem>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
