"use client";

import { Activity, CheckCircle, Clock, TrendingUp } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function ColaboradorDashboard() {
    return (
        <div className="flex flex-1 flex-col gap-4 md:gap-6 p-4 md:p-6">
            {/* Colaborador Stats Cards - Limited Access */}
            <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent border-purple-500/30 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
                        <CardTitle className="text-sm font-medium text-gray-300">
                            Minhas Vendas
                        </CardTitle>
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-teal-500/20 group-hover:from-purple-500/30 group-hover:to-teal-500/30 transition-colors duration-300 group-hover:scale-110">
                            <TrendingUp className="h-5 w-5 text-purple-400" />
                        </div>
                    </CardHeader>
                    <CardContent className="relative">
                        <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-teal-300 bg-clip-text text-transparent">R$ 12.450,00</div>
                        <p className="text-sm text-purple-400 flex items-center gap-1.5 font-medium">
                            <TrendingUp className="h-4 w-4" />
                            <span>+15%</span>
                            <span className="text-gray-500 font-normal">este mês</span>
                        </p>
                    </CardContent>
                </Card>

                <Card className="relative overflow-hidden bg-gradient-to-br from-teal-500/10 via-teal-500/5 to-transparent border-teal-500/30 backdrop-blur-xl hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/20 group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
                        <CardTitle className="text-sm font-medium text-gray-300">
                            Tarefas Concluídas
                        </CardTitle>
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 group-hover:from-teal-500/30 group-hover:to-cyan-500/30 transition-colors duration-300 group-hover:scale-110">
                            <CheckCircle className="h-5 w-5 text-teal-400" />
                        </div>
                    </CardHeader>
                    <CardContent className="relative">
                        <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">24/30</div>
                        <p className="text-sm text-teal-400 flex items-center gap-1.5 font-medium">
                            <span className="text-gray-500 font-normal">Meta mensal: 80%</span>
                        </p>
                    </CardContent>
                </Card>

                <Card className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent border-purple-500/30 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
                        <CardTitle className="text-sm font-medium text-gray-300">
                            Horas Trabalhadas
                        </CardTitle>
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 group-hover:from-purple-500/30 group-hover:to-fuchsia-500/30 transition-colors duration-300 group-hover:scale-110">
                            <Clock className="h-5 w-5 text-fuchsia-400" />
                        </div>
                    </CardHeader>
                    <CardContent className="relative">
                        <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">156h</div>
                        <p className="text-sm text-purple-400 flex items-center gap-1.5 font-medium">
                            <span className="text-gray-500 font-normal">este mês</span>
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Colaborador-specific content */}
            <div className="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-2">
                <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-300">
                    <CardHeader>
                        <CardTitle className="text-white text-lg font-semibold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                            Minhas Tarefas
                        </CardTitle>
                        <CardDescription className="text-gray-400">Tarefas atribuídas a você</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition-colors">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-sm font-medium text-white">Atualizar relatório de vendas</p>
                                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">Em andamento</span>
                                </div>
                                <p className="text-xs text-gray-400">Prazo: Hoje, 18:00</p>
                            </div>
                            <div className="p-3 rounded-lg bg-teal-500/10 border border-teal-500/20 hover:bg-teal-500/20 transition-colors">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-sm font-medium text-white">Contatar cliente XYZ</p>
                                    <span className="text-xs px-2 py-1 rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/30">Concluída</span>
                                </div>
                                <p className="text-xs text-gray-400">Prazo: Ontem</p>
                            </div>
                            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-colors">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-sm font-medium text-white">Preparar apresentação</p>
                                    <span className="text-xs px-2 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">Pendente</span>
                                </div>
                                <p className="text-xs text-gray-400">Prazo: Amanhã, 14:00</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-300">
                    <CardHeader>
                        <CardTitle className="text-white text-lg font-semibold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                            Minhas Metas
                        </CardTitle>
                        <CardDescription className="text-gray-400">Performance pessoal</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-sm font-medium text-white">Vendas do Mês</p>
                                    <span className="text-sm text-teal-400 font-bold">83%</span>
                                </div>
                                <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-purple-500 to-teal-400" style={{ width: '83%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-sm font-medium text-white">Satisfação do Cliente</p>
                                    <span className="text-sm text-purple-400 font-bold">95%</span>
                                </div>
                                <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-400" style={{ width: '95%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-sm font-medium text-white">Tarefas Completadas</p>
                                    <span className="text-sm text-cyan-400 font-bold">80%</span>
                                </div>
                                <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-teal-500 to-cyan-400" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
