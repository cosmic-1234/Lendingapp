/*
  Warnings:

  - A unique constraint covering the columns `[loanid]` on the table `Nostro` will be added. If there are existing duplicate values, this will fail.
  - Made the column `loanid` on table `Nostro` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Nostro" DROP CONSTRAINT "Nostro_loanid_fkey";

-- AlterTable
ALTER TABLE "Nostro" ALTER COLUMN "loanid" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Nostro_loanid_key" ON "Nostro"("loanid");

-- AddForeignKey
ALTER TABLE "Nostro" ADD CONSTRAINT "Nostro_loanid_fkey" FOREIGN KEY ("loanid") REFERENCES "Loan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
