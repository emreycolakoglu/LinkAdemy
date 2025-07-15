import { PrismaClient, type InstitutionProfile } from "@db";
import { UpdateInstitutionRequestDto } from "./dtos/update-institution-request.dto";

export async function updateInstitution(
  request: UpdateInstitutionRequestDto
): Promise<InstitutionProfile> {
  const prisma = new PrismaClient();

  const updatedInstitution = await prisma.institutionProfile.update({
    where: {
      id: request.id,
    },
    data: request,
  });

  return updatedInstitution;
}
