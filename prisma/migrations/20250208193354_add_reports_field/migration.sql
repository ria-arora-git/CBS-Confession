-- AlterTable
ALTER TABLE "Confessions" ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "reports" INTEGER NOT NULL DEFAULT 0;
