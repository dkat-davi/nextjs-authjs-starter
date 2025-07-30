import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (session) {
    redirect("/");
  }
  return (
    <SessionProvider>
      <main className="container text-center flex flex-col items-center justify-center h-screen">
        {children}
        <Link
          className={cn(
            buttonVariants({ variant: "link", size: "lg" }),
            "mt-8"
          )}
          href="/"
        >
          Voltar para Home
        </Link>
      </main>
    </SessionProvider>
  );
}
