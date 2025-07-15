import { PrismaClient, type User } from "@db";

export async function getUserById(userId: number): Promise<User> {
  const prisma = new PrismaClient();

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }
  return user;
}
