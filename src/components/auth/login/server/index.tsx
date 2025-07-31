"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import login from "@/actions/auth/login";

export default function LoginForm() {
  return (
    <Card className="mx-auto max-w-96 container">
      <CardHeader>
        <CardTitle>Login Server Component</CardTitle>
        <CardDescription>Entre com e-mail e senha</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={login} className="text-left ">
          <div className="space-y-6">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input
                name="email"
                type="email"
                id="email"
                required
                placeholder="Digite seu e-mail..."
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
          <Button size={"lg"} type="submit" className="w-full mt-10 ">
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
