/*
  Warnings:

  - Made the column `amount` on table `Nostro` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Nostro" DROP CONSTRAINT "Nostro_loanid_fkey";

-- AlterTable
ALTER TABLE "Nostro" ALTER COLUMN "amount" SET NOT NULL,
ALTER COLUMN "loanid" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Nostro" ADD CONSTRAINT "Nostro_loanid_fkey" FOREIGN KEY ("loanid") REFERENCES "Loan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
