"use server";

import { AuthError } from "next-auth";
import { signIn } from "../../../auth";
import { redirect } from "next/navigation";

export default async function login(formData: FormData) {
  const entries = Array.from(formData.entries());
  const { username, password } = Object.fromEntries(entries) as {
    username: string;
    password: string;
  };

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        error.message = "Credenciais Inválidas";
        throw error;
      }
    }
  }

  redirect("/");
}
