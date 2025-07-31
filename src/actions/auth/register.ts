"use server";

import { UserMethods } from "@/database/user.db";
import { redirect } from "next/navigation";

const userMethods = new UserMethods();

export default async function register(formData: FormData) {
  const entries = Array.from(formData.entries());
  const { name, email, password } = Object.fromEntries(entries) as {
    name: string;
    email: string;
    password: string;
  };

  if (!name || !email || !password) {
    throw new Error("Preencha todos os campos");
  }

  const userExists = await userMethods.findUser({ email });

  if (userExists) {
    throw new Error("E-mail já existe na base de dados");
  }

  await userMethods.create({ name, password, email });

  redirect("/login");
}
