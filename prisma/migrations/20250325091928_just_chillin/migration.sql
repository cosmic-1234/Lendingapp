-- DropForeignKey
ALTER TABLE "Loan" DROP CONSTRAINT "Loan_takerid_fkey";

-- AlterTable
ALTER TABLE "Loan" ALTER COLUMN "takerid" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Loan" ADD CONSTRAINT "Loan_takerid_fkey" FOREIGN KEY ("takerid") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
