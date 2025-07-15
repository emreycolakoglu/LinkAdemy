import { type Prisma } from "@db";

export type CreateInstitutionRequestDto =
  Prisma.InstitutionProfileCreateArgs["data"];
