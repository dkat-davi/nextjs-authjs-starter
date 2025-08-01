import { UserMethods } from "@/database/user.db";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import Nodemailer from "next-auth/providers/nodemailer";
import { PrismaAdapter } from "@auth/prisma-adapter";
import db from "@/database";

const userMethods = new UserMethods();

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    newUser: "/register",
  },
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        email: {
          type: "email",
          label: "E-mail:",
          placeholder: "Type your e-mail...",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "Type your password...",
        },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          return null;
        }

        const { password, email } = credentials as LoginPayload;

        const user = await userMethods.login({ password, email });

        return user;
      },
    }),
    GithubProvider({}),
    Nodemailer({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
});
