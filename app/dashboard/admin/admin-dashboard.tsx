"use client";

import { Activity, CreditCard, DollarSign, Users, ArrowUpRight, TrendingUp } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AdminDashboard() {
    return (
        <div className="flex flex-1 flex-col gap-4 md:gap-6 p-4 md:p-6">
            {/* Admin Stats Cards - Full Access */}
            <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent border-purple-500/30 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
                        <CardTitle className="text-sm font-medium text-gray-300">
                            Receita Total (Admin)
                        </CardTitle>
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-teal-500/20 group-hover:from-purple-500/30 group-hover:to-teal-500/30 transition-colors duration-300 group-hover:scale-110">
                            <DollarSign className="h-5 w-5 text-purple-400" />
                        </div>
                    </CardHeader>
                    <CardContent className="relative">
                        <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-teal-300 bg-clip-text text-transparent">R$ 245.231,89</div>
                        <p className="text-sm text-purple-400 flex items-center gap-1.5 font-medium">
                            <TrendingUp className="h-4 w-4" />
                            <span>+20.1%</span>
                            <span className="text-gray-500 font-normal">vs mês passado</span>
                        </p>
                    </CardContent>
                </Card>

                <Card className="relative overflow-hidden bg-gradient-to-br from-teal-500/10 via-teal-500/5 to-transparent border-teal-500/30 backdrop-blur-xl hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/20 group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
                        <CardTitle className="text-sm font-medium text-gray-300">
                            Total de Usuários
                        </CardTitle>
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 group-hover:from-teal-500/30 group-hover:to-cyan-500/30 transition-colors duration-300 group-hover:scale-110">
                            <Users className="h-5 w-5 text-teal-400" />
                        </div>
                    </CardHeader>
                    <CardContent className="relative">
                        <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">12,350</div>
                        <p className="text-sm text-teal-400 flex items-center gap-1.5 font-medium">
                            <TrendingUp className="h-4 w-4" />
                            <span>+180.1%</span>
                            <span className="text-gray-500 font-normal">crescimento anual</span>
                        </p>
                    </CardContent>
                </Card>

                <Card className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent border-purple-500/30 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
                        <CardTitle className="text-sm font-medium text-gray-300">
                            Vendas Totais
                        </CardTitle>
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 group-hover:from-purple-500/30 group-hover:to-fuchsia-500/30 transition-colors duration-300 group-hover:scale-110">
                            <CreditCard className="h-5 w-5 text-fuchsia-400" />
                        </div>
                    </CardHeader>
                    <CardContent className="relative">
                        <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">+52,234</div>
                        <p className="text-sm text-purple-400 flex items-center gap-1.5 font-medium">
                            <TrendingUp className="h-4 w-4" />
                            <span>+19%</span>
                            <span className="text-gray-500 font-normal">vs mês passado</span>
                        </p>
                    </CardContent>
                </Card>

                <Card className="relative overflow-hidden bg-gradient-to-br from-teal-500/10 via-cyan-500/5 to-transparent border-cyan-500/30 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
                        <CardTitle className="text-sm font-medium text-gray-300">
                            Taxa de Conversão
                        </CardTitle>
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 group-hover:from-cyan-500/30 group-hover:to-teal-500/30 transition-colors duration-300 group-hover:scale-110">
                            <Activity className="h-5 w-5 text-cyan-400" />
                        </div>
                    </CardHeader>
                    <CardContent className="relative">
                        <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">24.5%</div>
                        <p className="text-sm text-cyan-400 flex items-center gap-1.5 font-medium">
                            <TrendingUp className="h-4 w-4" />
                            <span>+4.3%</span>
                            <span className="text-gray-500 font-normal">último trimestre</span>
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Admin-only content */}
            <div className="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-2">
                <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-300">
                    <CardHeader>
                        <CardTitle className="text-white text-lg font-semibold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                            Gerenciamento de Usuários (Admin)
                        </CardTitle>
                        <CardDescription className="text-gray-400">Controle completo do sistema</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { name: "Maria Silva", role: "Admin", status: "Ativo", avatar: "MS" },
                                { name: "João Santos", role: "Colaborador", status: "Ativo", avatar: "JS" },
                                { name: "Ana Costa", role: "Colaborador", status: "Inativo", avatar: "AC" },
                            ].map((user, i) => (
                                <div key={i} className="flex items-center justify-between group hover:bg-white/5 p-3 rounded-xl transition-all duration-200 -mx-3 border border-transparent hover:border-purple-500/20">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-10 w-10 ring-2 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all">
                                            <AvatarFallback className="bg-gradient-to-br from-purple-600 to-teal-500 text-white font-bold">{user.avatar}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-sm font-semibold text-white">{user.name}</p>
                                            <p className="text-xs text-gray-400">{user.role}</p>
                                        </div>
                                    </div>
                                    <div className={`px-2 py-1 rounded-full text-xs font-bold ${user.status === 'Ativo' ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30' : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'}`}>
                                        {user.status}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-300">
                    <CardHeader>
                        <CardTitle className="text-white text-lg font-semibold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                            Configurações do Sistema
                        </CardTitle>
                        <CardDescription className="text-gray-400">Acesso exclusivo para administradores</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition-colors cursor-pointer">
                                <p className="text-sm font-medium text-white">Permissões de Acesso</p>
                                <p className="text-xs text-gray-400 mt-1">Gerencie roles e permissões</p>
                            </div>
                            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-colors cursor-pointer">
                                <p className="text-sm font-medium text-white">Integrações</p>
                                <p className="text-xs text-gray-400 mt-1">APIs e webhooks</p>
                            </div>
                            <div className="p-3 rounded-lg bg-teal-500/10 border border-teal-500/20 hover:bg-teal-500/20 transition-colors cursor-pointer">
                                <p className="text-sm font-medium text-white">Segurança</p>
                                <p className="text-xs text-gray-400 mt-1">Logs e auditoria</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
