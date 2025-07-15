import { PrismaClient, type InstitutionProfile } from "@db";

export async function getInstitutionById(
  institutionId: number
): Promise<InstitutionProfile> {
  const prisma = new PrismaClient();

  const institution = await prisma.institutionProfile.findUnique({
    where: { id: institutionId },
  });

  if (!institution) {
    throw new Error("Institution not found");
  }
  return institution;
}
