# Configuração do NextAuth com Role

## Estrutura criada

### 1. Tipos TypeScript (`types/next-auth.d.ts`)
Extende os tipos do NextAuth para incluir o campo `role` nas informações do usuário.

### 2. Configuração do NextAuth (`lib/auth.ts`)
- Define as opções do NextAuth
- Configura o provider de credenciais
- Implementa callbacks para incluir `role` no JWT e na sessão
- **IMPORTANTE**: Substitua a lógica de autenticação mock por sua própria implementação

### 3. Rota API (`app/api/auth/[...nextauth]/route.ts`)
Handler do NextAuth para processar as requisições de autenticação.

### 4. SessionProvider (`components/providers/session-provider.tsx`)
Componente client-side que fornece o contexto de sessão para toda a aplicação.

### 5. Componente de Exemplo (`components/user-info.tsx`)
Demonstra como acessar as informações do usuário incluindo o role.

## Como usar

### 1. Configurar variáveis de ambiente

Crie um arquivo `.env.local` baseado no `.env.example`:

```bash
cp .env.example .env.local
```

Gere uma chave secreta:

```bash
openssl rand -base64 32
```

Cole a chave no arquivo `.env.local`:

```
NEXTAUTH_SECRET=sua-chave-gerada-aqui
NEXTAUTH_URL=http://localhost:3000
```

### 2. Implementar sua lógica de autenticação

Edite o arquivo `lib/auth.ts` e substitua a lógica mock no método `authorize()`:

```typescript
async authorize(credentials) {
  // Exemplo: buscar do banco de dados
  const user = await db.user.findUnique({
    where: { email: credentials.email }
  });

  if (user && await verifyPassword(credentials.password, user.password)) {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role, // admin, user, colaborator, etc.
    };
  }

  return null;
}
```

### 3. Usar a sessão em componentes client-side

```tsx
"use client";

import { useSession } from "next-auth/react";

export function MyComponent() {
  const { data: session } = useSession();

  if (session) {
    console.log(session.user.id);
    console.log(session.user.role);
    console.log(session.user.email);
  }

  return <div>...</div>;
}
```

### 4. Usar a sessão em Server Components

```tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session) {
    console.log(session.user.role);
  }

  return <div>...</div>;
}
```

### 5. Proteger rotas baseado em role

```tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    redirect("/");
  }

  return <div>Página Admin</div>;
}
```

### 6. Middleware para proteção de rotas (opcional)

Crie `middleware.ts` na raiz do projeto:

```typescript
import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ req, token }) => {
      // Proteger rotas /admin apenas para admins
      if (req.nextUrl.pathname.startsWith("/admin")) {
        return token?.role === "admin";
      }
      return !!token;
    },
  },
});

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
```

## Credenciais de teste (mock)

Enquanto não implementar sua lógica:

**Admin:**
- Email: admin@example.com
- Senha: admin123
- Role: admin

**Usuário:**
- Email: user@example.com
- Senha: user123
- Role: colaborator

## Próximos passos

1. Criar página de login customizada em `app/login/page.tsx`
2. Integrar com banco de dados
3. Implementar hash de senhas (bcrypt)
4. Adicionar mais providers se necessário (Google, GitHub, etc.)
5. Implementar proteção de rotas com middleware
