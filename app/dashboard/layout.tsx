import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { Header } from "@/components/dashboard/header";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Server-side session validation with error handling
    let session = null;
    try {
        session = await getServerSession(authOptions);
    } catch (error) {
        // If JWT decryption fails, redirect to login
        console.log("JWT error - redirecting to login");
        redirect("/login");
    }

    // Redirect to login if not authenticated
    if (!session) {
        redirect("/login");
    }
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-2 bg-gradient-to-r from-purple-950/40 via-neutral-900/40 to-purple-950/40 backdrop-blur-xl px-4 transition-[width,height] ease-linear border-b border-purple-500/20 shadow-lg shadow-purple-900/10">
                    <SidebarTrigger className="text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-200 rounded-lg" />
                    <div className="flex-1">
                        <Header />
                    </div>
                </header>
                <main className="flex flex-1 flex-col">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
