import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
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
      async authorize() {
        return {
          id: "1",
          name: "dkat",
          email: "dkat@gmail.com",
        };
      },
    }),
  ],
});
