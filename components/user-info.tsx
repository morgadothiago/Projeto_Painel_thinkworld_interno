"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export function UserInfo() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="p-4">Carregando...</div>;
  }

  if (!session) {
    return (
      <div className="p-4 space-y-4">
        <h2 className="text-xl font-semibold">Você não está autenticado</h2>
        <button
          onClick={() => signIn()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Fazer Login
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-semibold">Informações do Usuário</h2>
      <div className="space-y-2">
        <p>
          <strong>ID:</strong> {session.user.id}
        </p>
        <p>
          <strong>Nome:</strong> {session.user.name}
        </p>
        <p>
          <strong>Email:</strong> {session.user.email}
        </p>
        <p>
          <strong>Role:</strong>{" "}
          <span
            className={`px-2 py-1 rounded text-sm ${
              session.user.role === "admin"
                ? "bg-purple-100 text-purple-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {session.user.role}
          </span>
        </p>
      </div>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Sair
      </button>
    </div>
  );
}
