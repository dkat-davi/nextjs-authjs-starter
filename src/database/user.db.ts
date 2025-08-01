import { compareSync, hashSync } from "bcrypt-ts";
import db from ".";

export class UserMethods {
  async create(data: CreateUserPayload) {
    try {
      const userExists = await db.user.findUnique({
        where: { email: data.email },
      });

      if (userExists) {
        throw new Error("E-mail já existe");
      }

      await db.user.create({
        data: {
          name: data.name,
          email: data.email,
          password: hashSync(data.password, 10),
        },
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao criar usuário");
    }
  }

  async findUser(data: { email: string }) {
    const user = await db.user.findUnique({
      where: {
        email: data.email,
      },
    });

    return user;
  }

  async login(data: LoginPayload) {
    try {
      const user = await this.findUser({ email: data.email });

      if (!user) {
        return null;
      }

      const passwordMatches = compareSync(
        data.password,
        user.password as string
      );

      if (passwordMatches) {
        return {
          name: user.name,
          id: user.id,
          email: user.email,
          emailVerified: user.emailVerified,
          role: user.role,
          active: user.role,
          image: user.image,
        };
      }

      return null;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao realizar login");
    }
  }
}
