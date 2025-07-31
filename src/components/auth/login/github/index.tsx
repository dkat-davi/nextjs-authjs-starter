"use client";

import githubLogin from "@/actions/auth/github";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";

export default function LoginGithubForm() {
  return (
    <Card className="mx-auto max-w-96 container">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Entre com seu usuário do GitHub</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={githubLogin} className="text-left ">
          <Button
            size={"lg"}
            type="submit"
            className="w-full flex items-center"
          >
            <FaGithub />
            <span>Login com Github</span>
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
