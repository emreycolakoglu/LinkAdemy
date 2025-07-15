import { PrismaClient, type User } from "@db";

export async function signInWithEmailPassword(
  email: string,
  password: string
): Promise<User> {
  const prisma = new PrismaClient();

  const user = await prisma.user.findUnique({
    where: {
      email,
      password,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }
  return user;
}
