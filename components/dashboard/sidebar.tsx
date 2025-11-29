"use client";

import { useAuth } from "@/components/providers/auth-context";
import { menuAdmin, menuColaborator } from "@/lib/menuItem";
import { cn } from "@/lib/utils";
import { LogOut, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
    const { user, role, logout } = useAuth();
    const pathname = usePathname();

    const menuItems = role === "admin" ? menuAdmin : menuColaborator;

    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-white/10 bg-neutral-950/50 backdrop-blur-xl transition-transform md:translate-x-0">
            <div className="flex h-full flex-col px-3 py-4">
                <div className="mb-8 flex items-center pl-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-teal-400 shadow-lg">
                        <Zap className="h-5 w-5 text-white" />
                    </div>
                    <span className="ml-3 self-center whitespace-nowrap text-xl font-semibold text-white">
                        Think World
                    </span>
                </div>

                <ul className="space-y-2 font-medium">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.path;

                        return (
                            <li key={item.path}>
                                <Link
                                    href={item.path}
                                    className={cn(
                                        "group flex items-center rounded-lg p-2 text-gray-300 hover:bg-white/10 hover:text-white",
                                        isActive && "bg-white/10 text-teal-400"
                                    )}
                                >
                                    <Icon
                                        className={cn(
                                            "h-5 w-5 flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-white",
                                            isActive && "text-teal-400"
                                        )}
                                    />
                                    <span className="ml-3">{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <div className="mt-auto border-t border-white/10 pt-4">
                    <div className="mb-4 flex items-center px-2">
                        <div className="h-8 w-8 rounded-full bg-purple-600/50 flex items-center justify-center text-white font-bold">
                            {user?.name?.[0] || "U"}
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-white">{user?.name || "User"}</p>
                            <p className="text-xs text-gray-400">{user?.email}</p>
                        </div>
                    </div>
                    <button
                        onClick={() => logout()}
                        className="group flex w-full items-center rounded-lg p-2 text-gray-300 hover:bg-red-500/10 hover:text-red-400"
                    >
                        <LogOut className="h-5 w-5 flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-red-400" />
                        <span className="ml-3">Sair</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}
