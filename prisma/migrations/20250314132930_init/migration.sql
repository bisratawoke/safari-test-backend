-- CreateTable
CREATE TABLE "bank" (
    "id" TEXT NOT NULL,
    "bankName" TEXT NOT NULL,

    CONSTRAINT "bank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "branch" (
    "id" TEXT NOT NULL,
    "branchName" TEXT NOT NULL,
    "bankId" TEXT NOT NULL,

    CONSTRAINT "branch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "account" (
    "id" TEXT NOT NULL,
    "accountName" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "accountReferenceFilePath" TEXT NOT NULL,
    "branchId" TEXT NOT NULL,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "branch" ADD CONSTRAINT "branch_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "bank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account" ADD CONSTRAINT "account_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "branch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
