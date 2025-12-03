"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Calendar, DollarSign, User, TrendingUp, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock project details - in real app, fetch based on id
const getProjectDetails = (id: string) => {
    const projects: Record<string, any> = {
        "1": {
            nome: "Website Redesign",
            cliente: "Tech Solutions Inc.",
            status: "ativo",
            valor: 45000.00,
            dataInicio: "2024-01-15",
            dataEntrega: "2024-06-30",
            descricao: "Redesign completo do website corporativo com foco em UX/UI moderno e responsivo.",
            progresso: 65,
            responsavel: "Maria Silva"
        },
        "2": {
            nome: "App Mobile E-commerce",
            cliente: "Fashion Store",
            status: "concluido",
            valor: 85000.00,
            dataInicio: "2023-09-01",
            dataEntrega: "2024-02-28",
            descricao: "Desenvolvimento de aplicativo mobile para e-commerce de moda com integração de pagamento.",
            progresso: 100,
            responsavel: "João Santos"
        },
        "3": {
            nome: "Sistema de Gestão",
            cliente: "Industrial Corp.",
            status: "ativo",
            valor: 120000.00,
            dataInicio: "2024-02-01",
            dataEntrega: "2024-08-31",
            descricao: "Sistema ERP customizado para gestão industrial com módulos de estoque, produção e vendas.",
            progresso: 45,
            responsavel: "Ana Costa"
        },
        "4": {
            nome: "Portal Corporativo",
            cliente: "Banking Group",
            status: "pausado",
            valor: 65000.00,
            dataInicio: "2023-11-01",
            dataEntrega: "2024-05-31",
            descricao: "Portal interno para colaboradores com integração de sistemas legados.",
            progresso: 30,
            responsavel: "Pedro Lima"
        },
        "5": {
            nome: "Dashboard Analytics",
            cliente: "Marketing Agency",
            status: "ativo",
            valor: 38000.00,
            dataInicio: "2024-03-01",
            dataEntrega: "2024-07-15",
            descricao: "Dashboard interativo para análise de dados de marketing e métricas de campanhas.",
            progresso: 75,
            responsavel: "Carla Souza"
        }
    };

    return projects[id] || null;
};

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
};

const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
};

const getStatusConfig = (status: string) => {
    const configs = {
        ativo: {
            label: "Ativo",
            className: "bg-teal-500/20 text-teal-400 border-teal-500/30",
            icon: TrendingUp
        },
        concluido: {
            label: "Concluído",
            className: "bg-purple-500/20 text-purple-400 border-purple-500/30",
            icon: CheckCircle2
        },
        pausado: {
            label: "Pausado",
            className: "bg-orange-500/20 text-orange-400 border-orange-500/30",
            icon: AlertCircle
        }
    };
    return configs[status as keyof typeof configs] || configs.ativo;
};

export default function ProjectDetails() {
    const params = useParams();
    const router = useRouter();
    const projectId = params.id as string;

    const project = getProjectDetails(projectId);

    if (!project) {
        return (
            <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
                <div className="text-center py-12">
                    <h2 className="text-2xl font-bold text-white mb-2">Projeto não encontrado</h2>
                    <p className="text-gray-400 mb-6">O projeto solicitado não existe ou foi removido.</p>
                    <Button
                        onClick={() => router.push('/dashboard/admin/caixa')}
                        className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Voltar ao Fluxo de Caixa
                    </Button>
                </div>
            </div>
        );
    }

    const statusConfig = getStatusConfig(project.status);
    const StatusIcon = statusConfig.icon;

    return (
        <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
            {/* Header with Back Button */}
            <div className="flex items-center gap-4">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => router.push('/dashboard/admin/caixa')}
                    className="hover:bg-white/10"
                >
                    <ArrowLeft className="h-5 w-5 text-gray-400" />
                </Button>
                <div className="flex-1">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                        {project.nome}
                    </h1>
                    <p className="text-gray-400 text-sm mt-1">Detalhes completos do projeto</p>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm font-bold border ${statusConfig.className} flex items-center gap-2`}>
                    <StatusIcon className="h-4 w-4" />
                    {statusConfig.label}
                </span>
            </div>

            {/* Main Info Cards */}
            <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {/* Valor Card */}
                <Card className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent border-purple-500/30 backdrop-blur-xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
                        <CardTitle className="text-sm font-medium text-gray-300">Valor Total</CardTitle>
                        <DollarSign className="h-5 w-5 text-purple-400" />
                    </CardHeader>
                    <CardContent className="relative">
                        <div className="text-2xl font-bold text-white bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
                            {formatCurrency(project.valor)}
                        </div>
                    </CardContent>
                </Card>

                {/* Progresso Card */}
                <Card className="relative overflow-hidden bg-gradient-to-br from-teal-500/10 via-teal-500/5 to-transparent border-teal-500/30 backdrop-blur-xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
                        <CardTitle className="text-sm font-medium text-gray-300">Progresso</CardTitle>
                        <TrendingUp className="h-5 w-5 text-teal-400" />
                    </CardHeader>
                    <CardContent className="relative">
                        <div className="text-2xl font-bold text-white bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                            {project.progresso}%
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2 mt-2">
                            <div
                                className="bg-gradient-to-r from-teal-400 to-cyan-400 h-2 rounded-full transition-all duration-500"
                                style={{ width: `${project.progresso}%` }}
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Data Início Card */}
                <Card className="relative overflow-hidden bg-gradient-to-br from-cyan-500/10 via-cyan-500/5 to-transparent border-cyan-500/30 backdrop-blur-xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
                        <CardTitle className="text-sm font-medium text-gray-300">Data Início</CardTitle>
                        <Calendar className="h-5 w-5 text-cyan-400" />
                    </CardHeader>
                    <CardContent className="relative">
                        <div className="text-sm font-semibold text-white">
                            {formatDate(project.dataInicio)}
                        </div>
                    </CardContent>
                </Card>

                {/* Data Entrega Card */}
                <Card className="relative overflow-hidden bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-transparent border-orange-500/30 backdrop-blur-xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
                        <CardTitle className="text-sm font-medium text-gray-300">Data Entrega</CardTitle>
                        <Clock className="h-5 w-5 text-orange-400" />
                    </CardHeader>
                    <CardContent className="relative">
                        <div className="text-sm font-semibold text-white">
                            {formatDate(project.dataEntrega)}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Project Details */}
            <div className="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-2">
                {/* Informações Gerais */}
                <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-xl">
                    <CardHeader>
                        <CardTitle className="text-white text-lg font-semibold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                            Informações Gerais
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <p className="text-sm text-gray-400 mb-1">Cliente</p>
                            <p className="text-white font-medium flex items-center gap-2">
                                <User className="h-4 w-4 text-purple-400" />
                                {project.cliente}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 mb-1">Responsável</p>
                            <p className="text-white font-medium flex items-center gap-2">
                                <User className="h-4 w-4 text-teal-400" />
                                {project.responsavel}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 mb-1">Descrição</p>
                            <p className="text-white leading-relaxed">
                                {project.descricao}
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Timeline / Financeiro */}
                <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-xl">
                    <CardHeader>
                        <CardTitle className="text-white text-lg font-semibold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                            Resumo Financeiro
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                            Informações de pagamento e faturamento
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="flex justify-between items-center p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                            <p className="text-sm text-gray-300">Valor do Contrato</p>
                            <p className="text-white font-bold">{formatCurrency(project.valor)}</p>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-lg bg-teal-500/10 border border-teal-500/20">
                            <p className="text-sm text-gray-300">Valor Recebido</p>
                            <p className="text-teal-400 font-bold">{formatCurrency(project.valor * (project.progresso / 100))}</p>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                            <p className="text-sm text-gray-300">Saldo Pendente</p>
                            <p className="text-orange-400 font-bold">{formatCurrency(project.valor * (1 - project.progresso / 100))}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
