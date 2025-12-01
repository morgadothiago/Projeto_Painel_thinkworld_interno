import {
    LayoutDashboard,
    Users,
    Settings,
    FileText,
    CheckSquare,
    User,
    BarChart3,
    ShieldCheck,
    Calendar,
    MessageSquare,
    FolderKanban,
    Clock,
    Award,
    TrendingUp,
    UserCog,
    Database,
    Bell,
    Search,
    Briefcase,
    BoxIcon
} from "lucide-react";
import { MenuItem } from "@/components/dashboard/menu-item";

export const menuAdmin: MenuItem[] = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
        description: "Visão geral do sistema"
    },
    {
        title: "caixa",
        path: "/dashboard/admin/caixa",
        icon: BoxIcon,
        description: "Fluxo de caixa"
    },
    {
        title: "Usuários",
        path: "/dashboard/admin/users",
        icon: Users,
        description: "Gerenciar usuários do sistema",
        badge: "3"
    },
    {
        title: "Relatórios",
        path: "/dashboard/admin/reports",
        icon: BarChart3,
        description: "Relatórios e analytics"
    },
    {
        title: "Analytics",
        path: "/dashboard/admin/analytics",
        icon: TrendingUp,
        description: "Métricas e performance"
    },
    {
        title: "Projetos",
        path: "/dashboard/admin/projects",
        icon: FolderKanban,
        description: "Gerenciar projetos"
    },
    {
        title: "Calendário",
        path: "/dashboard/admin/calendar",
        icon: Calendar,
        description: "Agenda e eventos"
    },
    {
        title: "Mensagens",
        path: "/dashboard/messages",
        icon: MessageSquare,
        description: "Central de mensagens",
        badge: "5"
    },

];

export const menuColaborator: MenuItem[] = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
        description: "Minha visão geral"
    },
    {
        title: "Minhas Tarefas",
        path: "/dashboard/tasks",
        icon: CheckSquare,
        description: "Tarefas atribuídas",
        badge: "7"
    },
    {
        title: "Projetos",
        path: "/dashboard/projects",
        icon: Briefcase,
        description: "Meus projetos"
    },
    {
        title: "Calendário",
        path: "/dashboard/calendar",
        icon: Calendar,
        description: "Minha agenda"
    },
    {
        title: "Mensagens",
        path: "/dashboard/messages",
        icon: MessageSquare,
        description: "Minhas mensagens",
        badge: "2"
    },
    {
        title: "Timesheet",
        path: "/dashboard/timesheet",
        icon: Clock,
        description: "Registro de horas"
    },
    {
        title: "Conquistas",
        path: "/dashboard/achievements",
        icon: Award,
        description: "Minhas conquistas"
    },
    {
        title: "Notificações",
        path: "/dashboard/notifications",
        icon: Bell,
        description: "Central de notificações"
    },
    {
        title: "Meu Perfil",
        path: "/dashboard/profile",
        icon: UserCog,
        description: "Configurações do perfil"
    },
];
