"use server";

import { AuthError } from "next-auth";
import { signIn } from "../../../auth";
import { redirect } from "next/navigation";

export default async function login(formData: FormData) {
  const entries = Array.from(formData.entries());
  const { email, password } = Object.fromEntries(entries) as {
    email: string;
    password: string;
  };

  try {
    await signIn("credentials", { email, password });
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
