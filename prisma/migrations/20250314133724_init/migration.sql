/*
  Warnings:

  - You are about to drop the `account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `bank` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `branch` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('DRAFT', 'SUBMITTED');

-- DropForeignKey
ALTER TABLE "account" DROP CONSTRAINT "account_branchId_fkey";

-- DropForeignKey
ALTER TABLE "branch" DROP CONSTRAINT "branch_bankId_fkey";

-- DropTable
DROP TABLE "account";

-- DropTable
DROP TABLE "bank";

-- DropTable
DROP TABLE "branch";

-- CreateTable
CREATE TABLE "tbl_application" (
    "id" SERIAL NOT NULL,
    "bank_name" TEXT NOT NULL,
    "branch_name" TEXT NOT NULL,
    "account_name" TEXT NOT NULL,
    "account_number" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'DRAFT',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl_application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_bank" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "tbl_bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tbl_branch" (
    "id" SERIAL NOT NULL,
    "value" TEXT NOT NULL,
    "bank_id" INTEGER NOT NULL,

    CONSTRAINT "tbl_branch_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl_application_account_number_key" ON "tbl_application"("account_number");

-- AddForeignKey
ALTER TABLE "tbl_branch" ADD CONSTRAINT "tbl_branch_bank_id_fkey" FOREIGN KEY ("bank_id") REFERENCES "tbl_bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
