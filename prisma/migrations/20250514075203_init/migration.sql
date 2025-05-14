-- CreateEnum
CREATE TYPE "Privacy" AS ENUM ('ME', 'LINK', 'ALL');

-- AlterTable
ALTER TABLE "Build" ADD COLUMN     "privacy" "Privacy" NOT NULL DEFAULT 'ME';
