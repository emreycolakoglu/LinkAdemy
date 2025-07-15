/*
  Warnings:

  - You are about to drop the column `userId` on the `InstitutionProfile` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "InstitutionUserRole" AS ENUM ('ADMIN', 'USER');

-- DropForeignKey
ALTER TABLE "InstitutionProfile" DROP CONSTRAINT "InstitutionProfile_userId_fkey";

-- DropIndex
DROP INDEX "InstitutionProfile_userId_key";

-- AlterTable
ALTER TABLE "InstitutionProfile" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "institutionId" TEXT,
ADD COLUMN     "institutionRole" "InstitutionUserRole",
ALTER COLUMN "role" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "InstitutionProfile"("id") ON DELETE SET NULL ON UPDATE CASCADE;
