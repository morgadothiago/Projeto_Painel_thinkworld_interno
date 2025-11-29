import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "seu@email.com" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // IMPORTANTE: Aqui você deve implementar sua própria lógica de autenticação
        // Exemplo: buscar usuário do banco de dados, verificar senha hash, etc.

        // Exemplo mock - SUBSTITUA por sua lógica real:
        if (
          credentials.email === "admin@example.com" &&
          credentials.password === "admin123"
        ) {
          return {
            id: "1",
            email: "admin@example.com",
            name: "Admin User",
            role: "admin",
          }
        }

        if (
          credentials.email === "user@example.com" &&
          credentials.password === "user123"
        ) {
          return {
            id: "2",
            email: "user@example.com",
            name: "Regular User",
            role: "colaborator",
          }
        }

        // Retorna null se as credenciais forem inválidas
        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Adiciona informações do usuário ao token JWT na primeira vez que o usuário faz login
      if (user) {
        token.id = user.id
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      // Adiciona informações do token à sessão que será enviada ao cliente
      if (session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as string
      }
      return session
    },
  },
  pages: {
    signIn: "/", // Página customizada de login (opcional)
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
}
