"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { createContext, useContext, ReactNode, useMemo } from "react";

interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    role?: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    role: string | null;
    login: (provider?: string, options?: any) => Promise<any>;
    logout: (options?: any) => Promise<any>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const { data: session, status } = useSession();

    const user = (session?.user as User) || null;
    const isAuthenticated = status === "authenticated";
    const isLoading = status === "loading";
    const role = user?.role || null;

    const login = async (provider?: string, options?: any) => {
        return signIn(provider, options);
    };

    const logout = async (options?: any) => {
        return signOut(options);
    };

    const value = useMemo(
        () => ({
            user,
            isAuthenticated,
            isLoading,
            role,
            login,
            logout,
        }),
        [user, isAuthenticated, isLoading, role]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
