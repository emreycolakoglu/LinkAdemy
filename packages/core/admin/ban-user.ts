import { getUserById } from "@core/user/get-user-by-id";
import { PrismaClient, type User } from "@db";

export async function banUser(userId: number): Promise<User> {
  const prisma = new PrismaClient();

  const user = await getUserById(userId);
  if (user.isBanned) {
    throw new Error("User is already banned");
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      isBanned: true,
    },
  });

  return updatedUser;
}
