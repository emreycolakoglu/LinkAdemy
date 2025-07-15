import { PrismaClient, type InstitutionProfile } from "@db";
import { CreateInstitutionRequestDto } from "./dtos/create-institution-request.dto";

export async function createInstitution(
  request: CreateInstitutionRequestDto
): Promise<InstitutionProfile> {
  const prisma = new PrismaClient();

  const existingInstitution = await prisma.institutionProfile.findFirst({
    where: {
      companyName: request.companyName,
    },
  });

  if (existingInstitution) {
    throw new Error("Institution already exists");
  }

  const newInstitution = await prisma.institutionProfile.create({
    data: request,
  });

  return newInstitution;
}
