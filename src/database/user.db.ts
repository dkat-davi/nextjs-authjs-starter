import { compareSync, hashSync } from "bcrypt-ts";
import db from ".";

export class UserMethods {
  async create(data: CreateUserPayload) {
    try {
      const userExists = await db.user.findUnique({
        where: { username: data.username },
      });

      if (userExists) {
        throw new Error("Usuário já existe");
      }

      await db.user.create({
        data: {
          name: data.name,
          username: data.username,
          password: hashSync(data.password, 10),
          role: "common",
          active: false,
        },
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao criar usuário");
    }
  }

  async findUser(data: { username: string }) {
    const user = await db.user.findUnique({
      where: {
        username: data.username,
      },
    });

    return user;
  }

  async login(data: LoginPayload) {
    try {
      const user = await this.findUser({ username: data.username });

      if (!user) {
        return null;
      }

      const passwordMatches = compareSync(data.password, user.password);

      if (passwordMatches) {
        return {
          id: user.id,
          name: user.name,
          username: user.username,
          role: user.role,
          active: user.active,
        };
      }

      return null;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao realizar login");
    }
  }
}
