import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaFacebook, FaGithub, FaKey } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Escolha uma opção de login
      </h1>
      <div className="grid grid-cols-2 gap-6 w-full max-w-[50vw]">
        <Card className="h-min">
          <CardContent className="flex flex-col justify-between gap-2">
            <div className="flex p-2 gap-4 items-center justify-center">
              <FaKey size={32} className="text-gray-800" />
              <CardTitle className="text-lg">Login with Credentials</CardTitle>
            </div>

            <Button variant="default">Entrar</Button>
          </CardContent>
        </Card>
        <Card className="h-min">
          <CardContent className="flex flex-col justify-between gap-2">
            <div className="flex p-2 gap-4 items-center justify-center">
              <FcGoogle size={32} />
              <CardTitle className="text-lg">Login com Google</CardTitle>
            </div>

            <Button variant="default">Entrar</Button>
          </CardContent>
        </Card>
        <Card className="h-min">
          <CardContent className="flex flex-col justify-between gap-2">
            <div className="flex p-2 gap-4 items-center justify-center">
              <FaFacebook size={32} className="text-blue-600" />
              <CardTitle className="text-lg">Login com Facebook</CardTitle>
            </div>

            <Button variant="default">Entrar</Button>
          </CardContent>
        </Card>
        <Card className="h-min">
          <CardContent className="flex flex-col justify-between gap-2">
            <div className="flex p-2 gap-4 items-center justify-center">
              <FaGithub size={32} className="text-gray-800" />
              <CardTitle className="text-lg">Login com GitHub</CardTitle>
            </div>

            <Button variant="default">Entrar</Button>
          </CardContent>
        </Card>
      </div>

      <div>
        <Link
          className={cn(
            buttonVariants({ variant: "link", size: "lg" }),
            "mt-8"
          )}
          href="/register"
        >
          Create user
        </Link>
      </div>
    </div>
  );
}
