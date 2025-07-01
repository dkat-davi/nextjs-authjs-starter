"use server";

import db from "@/database";
import { hashSync } from "bcrypt-ts";
import { redirect } from "next/navigation";

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

  const userExists = await db.user.findUnique({
    where: { username },
  });

  if (userExists) {
    throw new Error("Usuário já existe");
  }

  await db.user.create({
    data: {
      name,
      username,
      password: hashSync(password, 10),
      role: "admin",
    },
  });

  redirect("/");
}
