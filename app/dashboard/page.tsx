"use client";

import { useAuth } from "@/components/providers/auth-context";
import { AdminDashboard } from "@/app/dashboard/admin/admin-dashboard";
import { ColaboradorDashboard } from "@/app/dashboard/colaborator/colaborador-dashboard";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
    const { user, role, isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    // Client-side validation - redirect if not authenticated
    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push("/login");
        }
    }, [isAuthenticated, isLoading, router]);

    // Show loading state
    if (isLoading) {
        return (
            <div className="flex flex-1 items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent"></div>
                    <p className="mt-4 text-gray-400">Carregando...</p>
                </div>
            </div>
        );
    }

    // Render dashboard based on user role
    if (user?.role === "admin") {
        return <AdminDashboard />;
    }

    if (user?.role === "colaborator") {
        return <ColaboradorDashboard />;
    }

    // Fallback - should not reach here due to middleware
    return (
        <div className="flex flex-1 items-center justify-center min-h-screen">
            <div className="text-center">
                <p className="text-gray-400">Role não reconhecida</p>
            </div>
        </div>
    );
}
