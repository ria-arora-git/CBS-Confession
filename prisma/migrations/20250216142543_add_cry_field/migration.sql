/*
  Warnings:

  - You are about to drop the column `deleted` on the `Confessions` table. All the data in the column will be lost.
  - You are about to drop the column `reports` on the `Confessions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Confessions" DROP COLUMN "deleted",
DROP COLUMN "reports",
ADD COLUMN     "cry" INTEGER NOT NULL DEFAULT 0;
