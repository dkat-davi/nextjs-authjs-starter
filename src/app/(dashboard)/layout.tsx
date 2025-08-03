import { Header } from "@/components/header";
import "@/styles/globals.css";
import type { Metadata } from "next";
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
      <Header />

      {children}
    </div>
  );
}
