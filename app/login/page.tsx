"use client";

import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Zap } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Credenciais inválidas");
    } else if (result?.ok) {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 p-4">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-teal-600/10 blur-[100px]" />

      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col items-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-teal-400 shadow-lg">
            <Zap className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-center text-3xl font-bold tracking-tight text-white">
            Bem-vindo de volta
          </h2>
          <p className="mt-2 text-center text-sm text-gray-300">
            Acesse o Think World com suas credenciais para continuar criando campanhas com IA.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                E-mail
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="nome@empresa.com"
                className="mt-1 border-white/10 bg-white/5 text-white placeholder:text-gray-400 focus:border-teal-400 focus:ring-teal-400"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-200">
                  Senha
                </label>
                <a href="#" className="text-sm font-medium text-purple-300 hover:text-purple-200">
                  Esqueceu a senha?
                </a>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                className="mt-1 border-white/10 bg-white/5 text-white placeholder:text-gray-400 focus:border-teal-400 focus:ring-teal-400"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 bg-white/10 text-purple-600 focus:ring-purple-500"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
              Lembrar de mim
            </label>
          </div>

          {error && (
            <div className="rounded-md bg-red-500/10 p-4 border border-red-500/20">
              <p className="text-sm text-red-200">{error}</p>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative flex w-full justify-center rounded-lg bg-gradient-to-r from-purple-600 via-teal-400 to-purple-600 bg-[length:200%_auto] px-4 py-3 text-sm font-bold text-white shadow-lg transition-all duration-500 hover:bg-right hover:scale-[1.02] hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50"
            >
              {loading ? "Entrando..." : "Entrar →"}
            </button>
          </div>
        </form>

        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-gray-400">
            Ao acessar, você concorda com nossos{" "}
            <Link href="#" className="font-medium text-purple-300 hover:text-purple-200">
              termos de uso
            </Link>{" "}
            e{" "}
            <Link href="#" className="font-medium text-purple-300 hover:text-purple-200">
              política de privacidade
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
