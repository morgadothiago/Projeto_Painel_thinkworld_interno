import { Activity, CreditCard, DollarSign, Users, ArrowUpRight, TrendingUp, TrendingDown, Minus } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
    return (
        <div className="flex flex-1 flex-col gap-4 md:gap-6 p-4 md:p-6">
            {/* Stats Cards with responsive grid - 1 col on mobile, 2 on tablet, 4 on desktop */}
            <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent border-purple-500/30 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
                        <CardTitle className="text-sm font-medium text-gray-300">
                            Receita Total
                        </CardTitle>
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-teal-500/20 group-hover:from-purple-500/30 group-hover:to-teal-500/30 transition-colors duration-300 group-hover:scale-110">
                            <DollarSign className="h-5 w-5 text-purple-400" />
                        </div>
                    </CardHeader>
                    <CardContent className="relative">
                        <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-teal-300 bg-clip-text text-transparent">R$ 45.231,89</div>
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
                            Novos Usuários
                        </CardTitle>
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 group-hover:from-teal-500/30 group-hover:to-cyan-500/30 transition-colors duration-300 group-hover:scale-110">
                            <Users className="h-5 w-5 text-teal-400" />
                        </div>
                    </CardHeader>
                    <CardContent className="relative">
                        <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">+2,350</div>
                        <p className="text-sm text-teal-400 flex items-center gap-1.5 font-medium">
                            <TrendingUp className="h-4 w-4" />
                            <span>+180.1%</span>
                            <span className="text-gray-500 font-normal">vs mês passado</span>
                        </p>
                    </CardContent>
                </Card>

                <Card className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent border-purple-500/30 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
                        <CardTitle className="text-sm font-medium text-gray-300">
                            Vendas
                        </CardTitle>
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 group-hover:from-purple-500/30 group-hover:to-fuchsia-500/30 transition-colors duration-300 group-hover:scale-110">
                            <CreditCard className="h-5 w-5 text-fuchsia-400" />
                        </div>
                    </CardHeader>
                    <CardContent className="relative">
                        <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">+12,234</div>
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
                            Ativos Agora
                        </CardTitle>
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 group-hover:from-cyan-500/30 group-hover:to-teal-500/30 transition-colors duration-300 group-hover:scale-110">
                            <Activity className="h-5 w-5 text-cyan-400" />
                        </div>
                    </CardHeader>
                    <CardContent className="relative">
                        <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">+573</div>
                        <p className="text-sm text-cyan-400 flex items-center gap-1.5 font-medium">
                            <TrendingUp className="h-4 w-4" />
                            <span>+201</span>
                            <span className="text-gray-500 font-normal">última hora</span>
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Charts and Recent Sales */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-300">
                    <CardHeader>
                        <CardTitle className="text-white text-lg font-semibold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Visão Geral</CardTitle>
                        <CardDescription className="text-gray-400">Performance dos últimos 12 meses</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        {/* Chart with purple-to-teal gradient */}
                        <div className="h-[350px] w-full flex items-end justify-between gap-3 px-4 pb-4">
                            {[40, 30, 55, 45, 60, 75, 50, 65, 80, 70, 90, 85].map((h, i) => (
                                <div key={i} className="w-full relative group cursor-pointer">
                                    <div
                                        style={{ height: `${h}%` }}
                                        className="absolute bottom-0 w-full rounded-t-lg transition-all duration-300 group-hover:shadow-lg bg-gradient-to-t from-purple-600 via-purple-500 to-teal-400 group-hover:from-purple-500 group-hover:to-teal-300 group-hover:shadow-purple-500/50"
                                    >
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            <div className="bg-neutral-900/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-semibold text-white whitespace-nowrap border border-purple-500/30 shadow-xl">
                                                {Math.floor(h * 100)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="col-span-3 bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-300">
                    <CardHeader>
                        <CardTitle className="text-white text-lg font-semibold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Vendas Recentes</CardTitle>
                        <CardDescription className="text-gray-400">
                            Você fez <span className="text-purple-400 font-semibold">265 vendas</span> este mês
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+R$ 1.999,00", avatar: "OM" },
                                { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+R$ 39,00", avatar: "JL" },
                                { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+R$ 299,00", avatar: "IN" },
                                { name: "William Kim", email: "will@email.com", amount: "+R$ 99,00", avatar: "WK" },
                                { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+R$ 39,00", avatar: "SD" },
                            ].map((sale, i) => (
                                <div key={i} className="flex items-center group hover:bg-white/5 p-3 rounded-xl transition-all duration-200 -mx-3 border border-transparent hover:border-purple-500/20">
                                    <Avatar className="h-11 w-11 ring-2 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all">
                                        <AvatarFallback className="bg-gradient-to-br from-purple-600 to-teal-500 text-white font-bold shadow-lg">{sale.avatar}</AvatarFallback>
                                    </Avatar>
                                    <div className="ml-4 space-y-1 flex-1 min-w-0">
                                        <p className="text-sm font-semibold leading-none text-white truncate">{sale.name}</p>
                                        <p className="text-xs text-gray-400 truncate">{sale.email}</p>
                                    </div>
                                    <div className="ml-auto font-bold text-teal-400 text-sm">{sale.amount}</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Transactions Table */}
            <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle className="text-white text-lg font-semibold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Transações Recentes</CardTitle>
                        <CardDescription className="text-gray-400">Últimas transações realizadas no sistema</CardDescription>
                    </div>
                    <Button variant="outline" size="sm" className="bg-gradient-to-r from-purple-500/20 to-teal-500/20 border-purple-500/30 text-white hover:from-purple-500/30 hover:to-teal-500/30 transition-all duration-200 hover:border-purple-500/50">
                        Ver tudo <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="border-white/10 hover:bg-transparent">
                                <TableHead className="text-gray-400 font-semibold">Cliente</TableHead>
                                <TableHead className="text-gray-400 font-semibold">Status</TableHead>
                                <TableHead className="text-gray-400 font-semibold">Método</TableHead>
                                <TableHead className="text-right text-gray-400 font-semibold">Valor</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[
                                { client: "Liam Johnson", status: "Aprovado", statusColor: "teal", method: "Cartão de Crédito", amount: "R$ 250,00" },
                                { client: "Noah Williams", status: "Pendente", statusColor: "purple", method: "Pix", amount: "R$ 150,00" },
                                { client: "Emma Brown", status: "Aprovado", statusColor: "teal", method: "Boleto", amount: "R$ 450,00" },
                                { client: "James Garcia", status: "Falhou", statusColor: "fuchsia", method: "Cartão de Crédito", amount: "R$ 120,00" },
                            ].map((transaction, i) => (
                                <TableRow key={i} className="border-white/10 hover:bg-white/5 transition-colors duration-200">
                                    <TableCell className="font-semibold text-white">{transaction.client}</TableCell>
                                    <TableCell>
                                        <span className={`
                              inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold
                              ${transaction.statusColor === 'teal' ? 'text-teal-400 bg-teal-500/20 border border-teal-500/30' : ''}
                              ${transaction.statusColor === 'purple' ? 'text-purple-400 bg-purple-500/20 border border-purple-500/30' : ''}
                              ${transaction.statusColor === 'fuchsia' ? 'text-fuchsia-400 bg-fuchsia-500/20 border border-fuchsia-500/30' : ''}
                           `}>
                                            {transaction.status === 'Aprovado' && <TrendingUp className="h-3 w-3" />}
                                            {transaction.status === 'Pendente' && <Minus className="h-3 w-3" />}
                                            {transaction.status === 'Falhou' && <TrendingDown className="h-3 w-3" />}
                                            {transaction.status}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-gray-300">{transaction.method}</TableCell>
                                    <TableCell className="text-right text-white font-bold">{transaction.amount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
