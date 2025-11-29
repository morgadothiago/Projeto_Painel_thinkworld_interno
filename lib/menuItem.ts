import { LayoutDashboard, Users, Settings, FileText, CheckSquare, User } from "lucide-react";

export const menuAdmin = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Usuários",
        path: "/dashboard/users",
        icon: Users,
    },
    {
        title: "Relatórios",
        path: "/dashboard/reports",
        icon: FileText,
    },
    {
        title: "Configurações",
        path: "/dashboard/settings",
        icon: Settings,
    },
];

export const menuColaborator = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Minhas Tarefas",
        path: "/dashboard/tasks",
        icon: CheckSquare,
    },
    {
        title: "Meu Perfil",
        path: "/dashboard/profile",
        icon: User,
    },
];
