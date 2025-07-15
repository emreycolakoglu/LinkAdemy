import { type Prisma } from "@db";

export type UpdateInstitutionRequestDto =
  Prisma.InstitutionProfileUpdateArgs["data"] & { id: number };
