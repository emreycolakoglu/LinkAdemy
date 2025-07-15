import { PrismaClient, type User } from "@db";
import { AddUserToInstitutionRequestDto } from "./dtos/add-user-to-institution.dto";
import { getUserById } from "@core/user/get-user-by-id";
import { getInstitutionById } from "./get-institution-by-id";

/**
 * Updates a user to associate them with an institution and role.
 * Throws if user or institution does not exist.
 */
export async function addUserToInstitution(
  request: AddUserToInstitutionRequestDto
): Promise<User> {
  const prisma = new PrismaClient();

  // Extract numeric ids from request (Prisma update input types may be objects)
  const userId = typeof request.id === "number" ? request.id : undefined;
  const institutionId =
    typeof request.institutionId === "number"
      ? request.institutionId
      : undefined;

  if (!userId) {
    throw new Error("User id is required and must be a number");
  }
  if (!institutionId) {
    throw new Error("institutionId is required and must be a number");
  }

  // Check user exists
  await getUserById(userId);

  // Check institution exists
  await getInstitutionById(institutionId);

  // Update user with institution info
  return await prisma.user.update({
    where: { id: userId },
    data: {
      institutionId,
      institutionRole: request.institutionRole,
    },
  });
}
