import { PrismaClient, type User } from "@db";

export async function signUpWithEmailPassword(
  email: string,
  password: string
): Promise<User> {
  const prisma = new PrismaClient();

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const newUser = await prisma.user.create({
    data: {
      email,
      password,
    },
  });

  return newUser;
}
