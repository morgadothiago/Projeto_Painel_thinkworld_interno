"use client";

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { AuthProvider } from "./auth-context";

interface SessionProviderProps {
  children: ReactNode;
}

export function SessionProvider({ children }: SessionProviderProps) {
  return (
    <NextAuthSessionProvider>
      <AuthProvider>{children}</AuthProvider>
    </NextAuthSessionProvider>
  );
}
