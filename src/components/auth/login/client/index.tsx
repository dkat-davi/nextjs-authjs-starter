"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";

export default function LoginClientForm() {
  const [error, setError] = useState<string | null>(null);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    signIn("credentials", {
      email,
      password,
      redirect: false,
      redirectTo: "/",
    }).then((res) => {
      console.log(res);
      if (res && res.error === "CredentialsSignin") {
        setError("Credenciais inválidas");
      }

      if (res && res.url) {
        redirect(res.url);
      }
    });
  }

  return (
    <Card className="mx-auto max-w-96 container">
      <CardHeader>
        <CardTitle>Login Client Component</CardTitle>
        <CardDescription>Entre com e-mail e senha</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="text-left" onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input
                name="email"
                type="email"
                id="email"
                required
                placeholder="Digite seu usuário..."
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Senha</Label>
              <Input
                name="password"
                type="password"
                id="password"
                required
                placeholder="Digite sua senha..."
              />
            </div>
          </div>
          {error && (
            <p className="w-full mt-6 text-red-500 text-center">{error}</p>
          )}
          <Button size={"lg"} type="submit" className="w-full mt-6 ">
            Login
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <Link
          className={cn(
            buttonVariants({ variant: "link", size: "sm" }),
            "mt-2 mx-auto"
          )}
          href="/register"
        >
          Não possui conta?
        </Link>
      </CardFooter>
    </Card>
  );
}
