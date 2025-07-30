import { LoginCard } from "@/components/auth/login/login-card";
import { FaGithub, FaKey } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import { SiNextdns } from "react-icons/si";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Escolha uma opção de login
      </h1>
      <div className="grid grid-cols-2 gap-6 w-full max-w-[50vw]">
        <LoginCard
          icon={SiNextdns}
          title="Native Next Auth Login"
          href="/api/auth/signin"
        />
        <LoginCard
          icon={FaKey}
          title="Login with Credentials - Server"
          href="/login/server"
        />
        <LoginCard
          icon={FaKey}
          title="Login with Credentials - Client"
          href="/login/client"
        />
        <LoginCard icon={FcGoogle} title="Login com Google" href="#" />
        <LoginCard icon={FaGithub} title="Login com GitHub" href="#" />
        <LoginCard
          icon={MdOutlineEmail}
          title="Login with Magic Link"
          href="#"
        />
      </div>
    </div>
  );
}
