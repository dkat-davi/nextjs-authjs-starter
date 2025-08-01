"use client";

import emailLogin from "@/actions/auth/email";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MdOutlineEmail } from "react-icons/md";

export default function LoginEmailForm() {
  return (
    <Card className="mx-auto max-w-96 container">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Receba um link de aceso no seu e-mail</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={emailLogin} className="text-left space-y-2">
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
          <Button
            size={"lg"}
            type="submit"
            className="w-full flex items-center"
          >
            <MdOutlineEmail />
            <span>Login com Magic Link</span>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
