import logout from "@/actions/auth/logout";
import { formatUserName } from "@/functions/formatter";
import Image from "next/image";
import Link from "next/link";
import { auth } from "../../auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export const Header = async () => {
  const session = await auth();
  return (
    <header className="w-full py-2 shadow-md bg-zinc-50">
      <div className="px-8 flex justify-between items-center">
        <Link className="flex items-center gap-2" href="/home">
          <Image
            alt="next auth logo"
            src="/next-auth-logo.png"
            width={32}
            height={32}
          />
          <h1 className="text-2xl font-bold">Auth JS</h1>
        </Link>

        <div className="flex gap-8 items-center">
          <form action={logout}>
            <Button>Logout</Button>
          </form>
          <Link href={"/profile"}>
            <Avatar className="w-12 h-12 cursor-pointer">
              <AvatarImage
                src={session?.user?.image}
                alt="user image"
                width={32}
                height={32}
              />
              <AvatarFallback>
                {formatUserName(session?.user.name ?? "")}
              </AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </header>
  );
};
