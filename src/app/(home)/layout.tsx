import logout from "@/actions/auth/logout";
import { Button } from "@/components/ui/button";
import "@/styles/globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "../../../auth";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="w-full bg-zinc-50  py-6 shadow-md">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              alt="next auth logo"
              src="/next-auth-logo.png"
              width={32}
              height={32}
            />
            <h1 className="text-2xl font-bold">Next Auth</h1>
          </div>
          <form action={logout}>
            <Button>Logout</Button>
          </form>
        </div>
      </header>

      {children}
    </div>
  );
}
