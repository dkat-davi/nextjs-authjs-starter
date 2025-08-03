import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatUserName } from "@/functions/formatter";
import { Mail, Shield, User } from "lucide-react";
import { auth } from "../../../../auth";

export default async function ProfilePage() {
  const session = await auth();

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "destructive";
      case "moderator":
        return "secondary";
      case "premium":
        return "default";
      default:
        return "outline";
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Dados do usuário</h1>
          <p className="text-muted-foreground">
            Página para visualização dos dados da sessão do usuário
          </p>
        </div>

        <Card>
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <Avatar className="w-24 h-24">
                <AvatarImage
                  src={session?.user.image}
                  alt={session?.user.name}
                />
                <AvatarFallback className="text-2xl">
                  {formatUserName(session?.user.name ?? "")}
                </AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-2xl capitalize">
              {session?.user.name}
            </CardTitle>
            <CardDescription className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              {session?.user.email}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Separator />

            <div className="">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Informações da conta
                </h3>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">ID do usuário:</span>
                    <code className="text-xs bg-muted px-2 py-1 rounded font-mono">
                      {session?.user.id}
                    </code>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Perfil:</span>
                    <Badge
                      variant={getRoleColor(session?.user.role ?? "commom")}
                    >
                      <Shield className="w-3 h-3 mr-1" />
                      {session?.user.role}
                    </Badge>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">
                      Email verificado:
                    </span>
                    <Badge
                      variant={
                        session?.user.emailVerified ? "default" : "secondary"
                      }
                    >
                      {session?.user.emailVerified
                        ? "Verified"
                        : "Not Verified"}
                    </Badge>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">
                      Status da conta:
                    </span>
                    <Badge
                      variant={session?.user.active ? "default" : "secondary"}
                    >
                      {session?.user.active ? "Active" : "Inactive"}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
