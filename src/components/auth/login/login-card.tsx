import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentType, FC } from "react";

interface LoginCardProps {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  href: string;
}

export const LoginCard: FC<LoginCardProps> = ({ icon: Icon, title, href }) => {
  return (
    <Card className="h-min">
      <CardContent className="flex flex-col justify-between gap-2">
        <div className="flex p-2 gap-4 items-center justify-center">
          <Icon size={32} className="text-gray-800" />
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>

        <Link
          className={cn(buttonVariants({ variant: "default" }))}
          href={href}
        >
          Login
        </Link>
      </CardContent>
    </Card>
  );
};
