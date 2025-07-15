import { type Prisma } from "@db";

export type AddUserToInstitutionRequestDto = Pick<
  Prisma.UserUpdateArgs["data"],
  "id" | "institutionId" | "institutionRole"
>;
