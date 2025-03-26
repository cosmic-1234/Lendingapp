-- CreateTable
CREATE TABLE "Nostro" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "loanid" TEXT NOT NULL,

    CONSTRAINT "Nostro_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Nostro" ADD CONSTRAINT "Nostro_loanid_fkey" FOREIGN KEY ("loanid") REFERENCES "Loan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
