/*
  Warnings:

  - Made the column `amount` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "amount" SET NOT NULL;
