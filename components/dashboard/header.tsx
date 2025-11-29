"use client";

import { useAuth } from "@/components/providers/auth-context";
import { Bell, Search, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
    const { user } = useAuth();

    return (
        <div className="flex items-center justify-between w-full gap-2 md:gap-4">
            {/* Left: Title with vibrant gradient - Responsive */}
            <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
                <div className="flex flex-col min-w-0">
                    <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-300 via-fuchsia-300 to-teal-300 bg-clip-text text-transparent tracking-tight leading-tight truncate">
                        Dashboard
                    </h1>
                    <p className="hidden sm:block text-[10px] text-gray-300 font-medium leading-tight">Bem-vindo de volta! 👋</p>
                </div>
            </div>

            {/* Right: Actions - Responsive */}
            <div className="flex items-center gap-2 md:gap-3">
                {/* Search - Hidden on mobile, shown on md+ */}
                <div className="relative hidden md:block group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-teal-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-purple-300 transition-colors duration-200" />
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="h-9 md:h-11 w-48 lg:w-72 rounded-xl border border-purple-500/20 bg-purple-900/20 pl-11 pr-4 text-sm text-white placeholder:text-gray-400 backdrop-blur-xl focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400/20 focus:bg-purple-900/30 transition-all duration-200 hover:border-purple-500/30 hover:bg-purple-900/25"
                        />
                    </div>
                </div>

                {/* Mobile Search Button */}
                <button className="md:hidden relative rounded-xl p-2 text-gray-300 hover:bg-purple-500/10 hover:text-purple-300 transition-all duration-200 border border-purple-500/10 hover:border-purple-500/20">
                    <Search className="h-5 w-5" />
                </button>

                {/* Notifications Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className="relative rounded-xl p-2 md:p-2.5 text-gray-300 hover:bg-purple-500/10 hover:text-purple-300 transition-all duration-200 group border border-purple-500/10 hover:border-purple-500/20">
                            <Bell className="h-5 w-5" />
                            <span className="absolute right-1 top-1 md:right-1.5 md:top-1.5 flex h-3.5 w-3.5 md:h-4 md:w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3.5 w-3.5 md:h-4 md:w-4 bg-gradient-to-r from-teal-400 to-purple-400 items-center justify-center text-[8px] md:text-[9px] font-bold text-white shadow-lg">3</span>
                            </span>
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[calc(100vw-2rem)] sm:w-80 bg-neutral-900/95 backdrop-blur-xl border-purple-500/30 rounded-xl shadow-2xl" align="end">
                        <DropdownMenuLabel className="text-white font-semibold text-base px-4 py-3">
                            Notificações
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-white/10" />
                        <div className="p-2 space-y-2 max-h-[60vh] overflow-y-auto">
                            <DropdownMenuItem className="p-0 cursor-pointer focus:bg-transparent">
                                <div className="w-full p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition-colors">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-lg bg-purple-500/20 shrink-0">
                                            <Bell className="h-4 w-4 text-purple-400" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-white font-medium">Nova venda realizada</p>
                                            <p className="text-xs text-gray-400 mt-1">Há 5 minutos</p>
                                        </div>
                                    </div>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="p-0 cursor-pointer focus:bg-transparent">
                                <div className="w-full p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-colors">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-lg bg-blue-500/20 shrink-0">
                                            <Bell className="h-4 w-4 text-blue-400" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-white font-medium">Novo usuário cadastrado</p>
                                            <p className="text-xs text-gray-400 mt-1">Há 1 hora</p>
                                        </div>
                                    </div>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="p-0 cursor-pointer focus:bg-transparent">
                                <div className="w-full p-3 rounded-lg bg-teal-500/10 border border-teal-500/20 hover:bg-teal-500/20 transition-colors">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-lg bg-teal-500/20 shrink-0">
                                            <Bell className="h-4 w-4 text-teal-400" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm text-white font-medium">Relatório mensal pronto</p>
                                            <p className="text-xs text-gray-400 mt-1">Há 2 horas</p>
                                        </div>
                                    </div>
                                </div>
                            </DropdownMenuItem>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* User Avatar - More compact on mobile */}
                <div className="flex items-center gap-2 rounded-xl p-1 md:p-1.5 pr-2 md:pr-3 bg-gradient-to-r from-purple-500/10 to-teal-500/10 border border-purple-500/30 backdrop-blur-sm hover:from-purple-500/15 hover:to-teal-500/15 transition-all duration-200">
                    <Avatar className="h-7 w-7 md:h-8 md:w-8 border-2 border-purple-400/50 shadow-lg shadow-purple-500/20">
                        <AvatarImage src={user?.image || ""} alt={user?.name || ""} />
                        <AvatarFallback className="bg-gradient-to-br from-purple-600 to-teal-600 text-white font-bold text-xs md:text-sm">
                            {user?.name?.[0] || "U"}
                        </AvatarFallback>
                    </Avatar>
                    <div className="hidden lg:flex flex-col items-start">
                        <span className="text-sm font-semibold text-white">{user?.name || "User"}</span>
                        <span className="text-xs text-purple-300 font-medium">{user?.role === "admin" ? "Admin" : "Colaborador"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
