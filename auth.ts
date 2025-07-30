import { UserMethods } from "@/database/user.db";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
const userMethods = new UserMethods();

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    newUser: "/register",
  },
  providers: [
    Credentials({
      credentials: {
        username: {
          type: "text",
          label: "Username:",
          placeholder: "Type your username...",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "Type your password...",
        },
      },
      async authorize(credentials) {
        if (!credentials.username || !credentials.password) {
          return null;
        }

        const { password, username } = credentials as LoginPayload;

        const user = await userMethods.login({ password, username });

        return user;
      },
    }),
  ],
});
