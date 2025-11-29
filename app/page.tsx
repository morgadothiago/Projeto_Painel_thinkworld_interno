import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import LoginPage from "./login/page";

export default async function Home() {
  // Try to get session, but handle JWT errors gracefully
  let session = null;
  try {
    session = await getServerSession(authOptions);
  } catch (error) {
    // If JWT decryption fails (old cookies), just treat as not authenticated
    console.log("Session error (likely old cookies):", error);
  }

  if (session) {
    redirect("/dashboard");
  }

  return <LoginPage />;
}
