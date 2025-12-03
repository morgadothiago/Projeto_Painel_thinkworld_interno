"use client";

import { useState } from "react";
import { TrendingUp, TrendingDown, DollarSign, Wallet, CreditCard, ArrowRight, Plus, AlertCircle, CheckCircle, XCircle, Calendar, Tag, FileText, Upload, User, Sparkles, Briefcase } from "lucide-react";
import { useRouter } from "next/navigation";
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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// Type for expenses
type Despesa = {
    id: string;
    descricao: string;
    valor: number;
    data: string;
    categoria: string;
    aprovacao: "pendente" | "aprovada" | "reprovada";
    imagem?: string;
    solicitadoPara?: string; // ID do sócio
};

// Lista de sócios para aprovação
const socios = [
    { id: "1", nome: "João Silva" },
    { id: "2", nome: "Maria Santos" },
    { id: "3", nome: "Carlos Oliveira" },
];

// Mock data for demonstration
const cashflowDataBase = {
    entrada: 145230.50,
    saida: 78450.30,
};

const projectsData = [
    {
        id: "1",
        nome: "Website Redesign",
        cliente: "Tech Solutions Inc.",
        status: "ativo",
        valor: 45000.00
    },
    {
        id: "2",
        nome: "App Mobile E-commerce",
        cliente: "Fashion Store",
        status: "concluido",
        valor: 85000.00
    },
    {
        id: "3",
        nome: "Sistema de Gestão",
        cliente: "Industrial Corp.",
        status: "ativo",
        valor: 120000.00
    },
    {
        id: "4",
        nome: "Portal Corporativo",
        cliente: "Banking Group",
        status: "pausado",
        valor: 65000.00
    },
    {
        id: "5",
        nome: "Dashboard Analytics",
        cliente: "Marketing Agency",
        status: "ativo",
        valor: 38000.00
    },
];

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
};

const getStatusConfig = (status: string) => {
    const configs = {
        ativo: {
            label: "Ativo",
            className: "bg-teal-500/20 text-teal-400 border-teal-500/30"
        },
        concluido: {
            label: "Concluído",
            className: "bg-purple-500/20 text-purple-400 border-purple-500/30"
        },
        pausado: {
            label: "Pausado",
            className: "bg-orange-500/20 text-orange-400 border-orange-500/30"
        }
    };
    return configs[status as keyof typeof configs] || configs.ativo;
};

export default function Caixa() {
    const router = useRouter();
    const [openEntradaModal, setOpenEntradaModal] = useState(false);
    const [openDespesaModal, setOpenDespesaModal] = useState(false);

    // Lista de despesas
    const [despesas, setDespesas] = useState<Despesa[]>([
        {
            id: "1",
            descricao: "Aluguel do escritório",
            valor: 5000,
            data: "2024-12-01",
            categoria: "Operacional",
            aprovacao: "pendente"
        },
        {
            id: "2",
            descricao: "Equipamentos de TI",
            valor: 12000,
            data: "2024-12-02",
            categoria: "Infraestrutura",
            aprovacao: "aprovada"
        },
        {
            id: "3",
            descricao: "Marketing Digital",
            valor: 8500,
            data: "2024-11-28",
            categoria: "Marketing",
            aprovacao: "aprovada"
        },
    ]);

    // Form states for Entrada
    const [entradaForm, setEntradaForm] = useState({
        descricao: "",
        cliente: "",
        projeto: "",
        valor: "",
        data: new Date().toISOString().split('T')[0],
        categoria: "",
    });

    // Form states for Despesa
    const [despesaForm, setDespesaForm] = useState({
        descricao: "",
        valor: "",
        data: new Date().toISOString().split('T')[0],
        categoria: "",
        solicitadoPara: "",
        imagem: null as File | null,
    });

    const handleAddEntrada = () => {
        // TODO: Implement API call to add entrada
        console.log("Nova Entrada:", entradaForm);
        setOpenEntradaModal(false);
        // Reset form
        setEntradaForm({
            descricao: "",
            cliente: "",
            projeto: "",
            valor: "",
            data: new Date().toISOString().split('T')[0],
            categoria: "",
        });
    };

    const handleAddDespesa = () => {
        // TODO: Upload imagem para servidor
        const imagemUrl = despesaForm.imagem ? URL.createObjectURL(despesaForm.imagem) : undefined;

        const novaDespesa: Despesa = {
            id: Date.now().toString(),
            descricao: despesaForm.descricao,
            valor: parseFloat(despesaForm.valor),
            data: despesaForm.data,
            categoria: despesaForm.categoria,
            aprovacao: "pendente",
            imagem: imagemUrl,
            solicitadoPara: despesaForm.solicitadoPara,
        };

        setDespesas([...despesas, novaDespesa]);
        console.log("Nova Despesa:", novaDespesa, "Imagem:", despesaForm.imagem);
        setOpenDespesaModal(false);

        // Reset form
        setDespesaForm({
            descricao: "",
            valor: "",
            data: new Date().toISOString().split('T')[0],
            categoria: "",
            solicitadoPara: "",
            imagem: null,
        });
    };

    const handleImagemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setDespesaForm({ ...despesaForm, imagem: e.target.files[0] });
        }
    };

    const handleAprovarDespesa = (id: string) => {
        setDespesas(despesas.map(d =>
            d.id === id ? { ...d, aprovacao: "aprovada" } : d
        ));
    };

    const handleReprovarDespesa = (id: string) => {
        setDespesas(despesas.map(d =>
            d.id === id ? { ...d, aprovacao: "reprovada" } : d
        ));
    };

    // Calcular despesas aprovadas
    const despesasAprovadas = despesas
        .filter(d => d.aprovacao === "aprovada")
        .reduce((total, d) => total + d.valor, 0);

    const despesasPendentes = despesas.filter(d => d.aprovacao === "pendente");

    const saldo = cashflowDataBase.entrada - cashflowDataBase.saida - despesasAprovadas;
    const saldoPositivo = saldo >= 0;

    return (
        <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
            {/* Header with Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                        Fluxo de Caixa
                    </h1>
                    <p className="text-gray-400 text-sm">
                        Acompanhe entradas, saídas e despesas  em tempo real
                    </p>
                </div>

                <div className="flex gap-3">
                    {/* Modal for Adding Entrada */}
                    <Dialog open={openEntradaModal} onOpenChange={setOpenEntradaModal}>
                        <DialogTrigger asChild>
                            <Button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold">
                                <Plus className="h-4 w-4 mr-2" />
                                Adicionar Entrada
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[550px] border-teal-500/20">
                            <DialogHeader className="space-y-3 pb-4 border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 ring-1 ring-teal-500/30">
                                        <Sparkles className="h-6 w-6 text-teal-400" />
                                    </div>
                                    <div>
                                        <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                                            Nova Entrada
                                        </DialogTitle>
                                        <DialogDescription className="text-sm text-gray-400 mt-1">
                                            Registre uma nova entrada no fluxo de caixa
                                        </DialogDescription>
                                    </div>
                                </div>
                            </DialogHeader>
                            <div className="grid gap-5 py-6">
                                <div className="group">
                                    <Label htmlFor="entrada-descricao" className="text-sm font-semibold text-gray-200 flex items-center gap-2 mb-2.5">
                                        <FileText className="h-4 w-4 text-teal-400" />
                                        Descrição
                                    </Label>
                                    <Input
                                        id="entrada-descricao"
                                        placeholder="Ex: Pagamento cliente X"
                                        value={entradaForm.descricao}
                                        onChange={(e) => setEntradaForm({ ...entradaForm, descricao: e.target.value })}
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11 focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="group">
                                        <Label htmlFor="entrada-cliente" className="text-sm font-semibold text-gray-200 flex items-center gap-2 mb-2.5">
                                            <User className="h-4 w-4 text-teal-400" />
                                            Cliente
                                        </Label>
                                        <Input
                                            id="entrada-cliente"
                                            placeholder="Ex: Tech Solutions"
                                            value={entradaForm.cliente}
                                            onChange={(e) => setEntradaForm({ ...entradaForm, cliente: e.target.value })}
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11 focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all"
                                        />
                                    </div>
                                    <div className="group">
                                        <Label htmlFor="entrada-projeto" className="text-sm font-semibold text-gray-200 flex items-center gap-2 mb-2.5">
                                            <Briefcase className="h-4 w-4 text-teal-400" />
                                            Projeto
                                        </Label>
                                        <Input
                                            id="entrada-projeto"
                                            placeholder="Ex: Website Redesign"
                                            value={entradaForm.projeto}
                                            onChange={(e) => setEntradaForm({ ...entradaForm, projeto: e.target.value })}
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11 focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="group">
                                        <Label htmlFor="entrada-valor" className="text-sm font-semibold text-gray-200 flex items-center gap-2 mb-2.5">
                                            <DollarSign className="h-4 w-4 text-emerald-400" />
                                            Valor (R$)
                                        </Label>
                                        <Input
                                            id="entrada-valor"
                                            type="number"
                                            placeholder="0,00"
                                            value={entradaForm.valor}
                                            onChange={(e) => setEntradaForm({ ...entradaForm, valor: e.target.value })}
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                                        />
                                    </div>
                                    <div className="group">
                                        <Label htmlFor="entrada-data" className="text-sm font-semibold text-gray-200 flex items-center gap-2 mb-2.5">
                                            <Calendar className="h-4 w-4 text-cyan-400" />
                                            Data
                                        </Label>
                                        <Input
                                            id="entrada-data"
                                            type="date"
                                            value={entradaForm.data}
                                            onChange={(e) => setEntradaForm({ ...entradaForm, data: e.target.value })}
                                            className="bg-white/5 border-white/10 text-white h-11 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="group">
                                    <Label htmlFor="entrada-categoria" className="text-sm font-semibold text-gray-200 flex items-center gap-2 mb-2.5">
                                        <Tag className="h-4 w-4 text-purple-400" />
                                        Categoria
                                    </Label>
                                    <Input
                                        id="entrada-categoria"
                                        placeholder="Ex: Vendas, Serviços"
                                        value={entradaForm.categoria}
                                        onChange={(e) => setEntradaForm({ ...entradaForm, categoria: e.target.value })}
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                    />
                                </div>
                            </div>
                            <DialogFooter className="gap-3 pt-6 border-t border-white/10">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setOpenEntradaModal(false)}
                                    className="text-white border-white/20 hover:bg-white/10 hover:border-white/30 transition-all"
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    onClick={handleAddEntrada}
                                    className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white shadow-lg shadow-teal-500/20 transition-all hover:shadow-xl hover:shadow-teal-500/30"
                                >
                                    <Plus className="h-4 w-4 mr-2" />
                                    Adicionar Entrada
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                    {/* Modal for Adding Despesa */}
                    <Dialog open={openDespesaModal} onOpenChange={setOpenDespesaModal}>
                        <DialogTrigger asChild>
                            <Button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white font-semibold">
                                <Plus className="h-4 w-4 mr-2" />
                                Registrar Despesa
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[550px] border-rose-500/20">
                            <DialogHeader className="space-y-3 pb-4 border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-rose-500/20 to-orange-500/20 ring-1 ring-rose-500/30">
                                        <TrendingDown className="h-6 w-6 text-rose-400" />
                                    </div>
                                    <div>
                                        <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                                            Registrar Despesa
                                        </DialogTitle>
                                        <DialogDescription className="text-sm text-gray-400 mt-1">
                                            Registre uma nova despesa no fluxo de caixa
                                        </DialogDescription>
                                    </div>
                                </div>
                            </DialogHeader>
                            <div className="grid gap-5 py-6">
                                <div className="group">
                                    <Label htmlFor="despesa-descricao" className="text-sm font-semibold text-gray-200 flex items-center gap-2 mb-2.5">
                                        <FileText className="h-4 w-4 text-rose-400" />
                                        Descrição
                                    </Label>
                                    <Input
                                        id="despesa-descricao"
                                        placeholder="Ex: Aluguel, Fornecedor Y"
                                        value={despesaForm.descricao}
                                        onChange={(e) => setDespesaForm({ ...despesaForm, descricao: e.target.value })}
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11 focus:border-rose-500/50 focus:ring-2 focus:ring-rose-500/20 transition-all"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="group">
                                        <Label htmlFor="despesa-valor" className="text-sm font-semibold text-gray-200 flex items-center gap-2 mb-2.5">
                                            <DollarSign className="h-4 w-4 text-rose-400" />
                                            Valor (R$)
                                        </Label>
                                        <Input
                                            id="despesa-valor"
                                            type="number"
                                            placeholder="0,00"
                                            value={despesaForm.valor}
                                            onChange={(e) => setDespesaForm({ ...despesaForm, valor: e.target.value })}
                                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11 focus:border-rose-500/50 focus:ring-2 focus:ring-rose-500/20 transition-all"
                                        />
                                    </div>
                                    <div className="group">
                                        <Label htmlFor="despesa-data" className="text-sm font-semibold text-gray-200 flex items-center gap-2 mb-2.5">
                                            <Calendar className="h-4 w-4 text-orange-400" />
                                            Data
                                        </Label>
                                        <Input
                                            id="despesa-data"
                                            type="date"
                                            value={despesaForm.data}
                                            onChange={(e) => setDespesaForm({ ...despesaForm, data: e.target.value })}
                                            className="bg-white/5 border-white/10 text-white h-11 focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="group">
                                    <Label htmlFor="despesa-categoria" className="text-sm font-semibold text-gray-200 flex items-center gap-2 mb-2.5">
                                        <Tag className="h-4 w-4 text-purple-400" />
                                        Categoria
                                    </Label>
                                    <Input
                                        id="despesa-categoria"
                                        placeholder="Ex: Operacional, Marketing"
                                        value={despesaForm.categoria}
                                        onChange={(e) => setDespesaForm({ ...despesaForm, categoria: e.target.value })}
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-11 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                    />
                                </div>
                                <div className="group">
                                    <Label htmlFor="despesa-solicitadoPara" className="text-sm font-semibold text-gray-200 flex items-center gap-2 mb-2.5">
                                        <User className="h-4 w-4 text-blue-400" />
                                        Solicitação de aprovação
                                    </Label>
                                    <Select
                                        value={despesaForm.solicitadoPara}
                                        onValueChange={(value) => setDespesaForm({ ...despesaForm, solicitadoPara: value })}
                                    >
                                        <SelectTrigger id="despesa-solicitadoPara" className="bg-white/5 border-white/10 text-white h-11 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all">
                                            <SelectValue placeholder="Selecione o sócio para aprovar" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {socios.map((socio) => (
                                                <SelectItem key={socio.id} value={socio.id}>
                                                    {socio.nome}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="group">
                                    <Label htmlFor="despesa-imagem" className="text-sm font-semibold text-gray-200 flex items-center gap-2 mb-2.5">
                                        <Upload className="h-4 w-4 text-pink-400" />
                                        Comprovante (Imagem)
                                    </Label>
                                    <Input
                                        id="despesa-imagem"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImagemChange}
                                        className="bg-white/5 border-white/10 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-rose-600 file:text-white hover:file:bg-rose-700 h-14 pt-2.5 transition-all"
                                    />
                                    {despesaForm.imagem && (
                                        <p className="text-sm text-rose-400 mt-2 flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4" />
                                            Arquivo selecionado: {despesaForm.imagem.name}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <DialogFooter className="gap-3 pt-6 border-t border-white/10">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setOpenDespesaModal(false)}
                                    className="text-white border-white/20 hover:bg-white/10 hover:border-white/30 transition-all"
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    onClick={handleAddDespesa}
                                    className="bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-700 hover:to-orange-700 text-white shadow-lg shadow-rose-500/20 transition-all hover:shadow-xl hover:shadow-rose-500/30"
                                >
                                    <Plus className="h-4 w-4 mr-2" />
                                    Registrar Despesa
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            {/* Financial Cards */}
            <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {/* Entrada Card */}
                <Card className="relative overflow-hidden bg-gradient-to-br from-teal-500/10 via-teal-500/5 to-transparent border-teal-500/30 backdrop-blur-xl hover:border-teal-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/20 group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
                        <CardTitle className="text-sm font-medium text-gray-300">
                            Entrada
                        </CardTitle>
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 group-hover:from-teal-500/30 group-hover:to-cyan-500/30 transition-colors duration-300 group-hover:scale-110">
                            <TrendingUp className="h-5 w-5 text-teal-400" />
                        </div>
                    </CardHeader>
                    <CardContent className="relative">
                        <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
                            {formatCurrency(cashflowDataBase.entrada)}
                        </div>
                        <p className="text-sm text-teal-400 flex items-center gap-1.5 font-medium">
                            <TrendingUp className="h-4 w-4" />
                            <span>Receitas do período</span>
                        </p>
                    </CardContent>
                </Card>

                {/* Saída Card */}
                <Card className="relative overflow-hidden bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-transparent border-orange-500/30 backdrop-blur-xl hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
                        <CardTitle className="text-sm font-medium text-gray-300">
                            Saída
                        </CardTitle>
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-colors duration-300 group-hover:scale-110">
                            <TrendingDown className="h-5 w-5 text-orange-400" />
                        </div>
                    </CardHeader>
                    <CardContent className="relative">
                        <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-orange-400 to-red-300 bg-clip-text text-transparent">
                            {formatCurrency(cashflowDataBase.saida)}
                        </div>
                        <p className="text-sm text-orange-400 flex items-center gap-1.5 font-medium">
                            <TrendingDown className="h-4 w-4" />
                            <span>Pagamentos realizados</span>
                        </p>
                    </CardContent>
                </Card>

                {/* Despesas Card */}
                <Card className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent border-purple-500/30 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
                        <CardTitle className="text-sm font-medium text-gray-300">
                            Despesas
                        </CardTitle>
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 group-hover:from-purple-500/30 group-hover:to-fuchsia-500/30 transition-colors duration-300 group-hover:scale-110">
                            <CreditCard className="h-5 w-5 text-purple-400" />
                        </div>
                    </CardHeader>
                    <CardContent className="relative">
                        <div className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-fuchsia-300 bg-clip-text text-transparent">
                            {formatCurrency(despesasAprovadas)}
                        </div>
                        <p className="text-sm text-purple-400 flex items-center gap-1.5 font-medium">
                            <CreditCard className="h-4 w-4" />
                            <span>Aprovadas: {despesas.filter(d => d.aprovacao === "aprovada").length}</span>
                        </p>
                    </CardContent>
                </Card>

                {/* Saldo Card */}
                <Card className={`relative overflow-hidden bg-gradient-to-br ${saldoPositivo ? 'from-emerald-500/10 via-emerald-500/5' : 'from-red-500/10 via-red-500/5'} to-transparent ${saldoPositivo ? 'border-emerald-500/30 hover:border-emerald-500/50 hover:shadow-emerald-500/20' : 'border-red-500/30 hover:border-red-500/50 hover:shadow-red-500/20'} backdrop-blur-xl transition-all duration-300 hover:shadow-xl group`}>
                    <div className={`absolute top-0 right-0 w-32 h-32 ${saldoPositivo ? 'bg-emerald-500/10' : 'bg-red-500/10'} rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`}></div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative">
                        <CardTitle className="text-sm font-medium text-gray-300">
                            Saldo
                        </CardTitle>
                        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${saldoPositivo ? 'from-emerald-500/20 to-teal-500/20 group-hover:from-emerald-500/30 group-hover:to-teal-500/30' : 'from-red-500/20 to-orange-500/20 group-hover:from-red-500/30 group-hover:to-orange-500/30'} transition-colors duration-300 group-hover:scale-110`}>
                            <Wallet className={`h-5 w-5 ${saldoPositivo ? 'text-emerald-400' : 'text-red-400'}`} />
                        </div>
                    </CardHeader>
                    <CardContent className="relative">
                        <div className={`text-3xl font-bold text-white mb-2 bg-gradient-to-r ${saldoPositivo ? 'from-emerald-400 to-teal-300' : 'from-red-400 to-orange-300'} bg-clip-text text-transparent`}>
                            {formatCurrency(saldo)}
                        </div>
                        <p className={`text-sm ${saldoPositivo ? 'text-emerald-400' : 'text-red-400'} flex items-center gap-1.5 font-medium`}>
                            {saldoPositivo ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                            <span>{saldoPositivo ? 'Saldo positivo' : 'Saldo negativo'}</span>
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Pending Expenses Approval Section */}
            {despesasPendentes.length > 0 && (
                <Card className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/30 backdrop-blur-xl">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-white text-xl font-semibold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent flex items-center gap-2">
                                    <AlertCircle className="h-5 w-5 text-orange-400" />
                                    Despesas Pendentes de Aprovação
                                </CardTitle>
                                <CardDescription className="text-gray-400 mt-1">
                                    {despesasPendentes.length} despesa(s) aguardando aprovação do sócio
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {despesasPendentes.map((despesa) => (
                                <div
                                    key={despesa.id}
                                    className="p-4 rounded-lg bg-white/5 border border-orange-500/20 hover:bg-white/10 transition-all duration-200"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <h4 className="text-white font-semibold text-lg">{despesa.descricao}</h4>
                                            <div className="flex flex-wrap gap-4 mt-2 text-sm">
                                                <div className="flex items-center gap-1.5 text-gray-400">
                                                    <DollarSign className="h-4 w-4" />
                                                    <span className="font-semibold text-white">{formatCurrency(despesa.valor)}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-gray-400">
                                                    <span>Categoria: {despesa.categoria}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-gray-400">
                                                    <span>Data: {new Date(despesa.data).toLocaleDateString('pt-BR')}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button
                                                onClick={() => handleAprovarDespesa(despesa.id)}
                                                className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white"
                                                size="sm"
                                            >
                                                <CheckCircle className="h-4 w-4 mr-1" />
                                                Aprovar
                                            </Button>
                                            <Button
                                                onClick={() => handleReprovarDespesa(despesa.id)}
                                                variant="destructive"
                                                size="sm"
                                            >
                                                <XCircle className="h-4 w-4 mr-1" />
                                                Reprovar
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Projects Table */}
            <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-xl">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle className="text-white text-xl font-semibold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                                Projetos
                            </CardTitle>
                            <CardDescription className="text-gray-400 mt-1">
                                Lista de projetos com valores e status
                            </CardDescription>
                        </div>
                        <div className="text-sm text-gray-400">
                            Total: {projectsData.length} projetos
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow className="border-white/10 hover:bg-transparent">
                                    <TableHead className="text-gray-300 font-semibold">Nome do Projeto</TableHead>
                                    <TableHead className="text-gray-300 font-semibold">Cliente</TableHead>
                                    <TableHead className="text-gray-300 font-semibold">Status</TableHead>
                                    <TableHead className="text-gray-300 font-semibold text-right">Valor</TableHead>
                                    <TableHead className="w-10"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {projectsData.map((project) => {
                                    const statusConfig = getStatusConfig(project.status);
                                    return (
                                        <TableRow
                                            key={project.id}
                                            className="border-white/10 hover:bg-white/5 cursor-pointer transition-all duration-200 group"
                                            onClick={() => router.push(`/dashboard/admin/projects/${project.id}`)}
                                        >
                                            <TableCell className="font-medium text-white">
                                                {project.nome}
                                            </TableCell>
                                            <TableCell className="text-gray-400">
                                                {project.cliente}
                                            </TableCell>
                                            <TableCell>
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${statusConfig.className}`}>
                                                    {statusConfig.label}
                                                </span>
                                            </TableCell>
                                            <TableCell className="text-right font-semibold text-white">
                                                {formatCurrency(project.valor)}
                                            </TableCell>
                                            <TableCell>
                                                <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-purple-400 transition-colors" />
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}