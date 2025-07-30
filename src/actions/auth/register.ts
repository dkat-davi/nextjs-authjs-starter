"use server";

import { UserMethods } from "@/database/user.db";
import { redirect } from "next/navigation";

const userMethods = new UserMethods();

export default async function register(formData: FormData) {
  const entries = Array.from(formData.entries());
  const { name, username, password } = Object.fromEntries(entries) as {
    name: string;
    username: string;
    password: string;
  };

  if (!name || !username || !password) {
    throw new Error("Preencha todos os campos");
  }

  const userExists = await userMethods.findUser({ username });

  if (userExists) {
    throw new Error("Usuário já existe na base de dados");
  }

  await userMethods.create({ name, password, username });

  redirect("/login");
}
