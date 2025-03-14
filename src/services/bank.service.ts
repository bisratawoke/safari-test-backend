import { prisma } from "../connections/db.connections";
import { applicationDto } from "../dtos/application.dto";

// Fetch available bank names
export async function getBanks() {
  return await prisma.tbl_bank.findMany({
    select: { id: true, value: true },
  });
}

// Fetch branch names based on bank_id
export async function getBranchesByBankId(bankId: string) {
  return await prisma.tbl_branch.findMany({
    where: { bank_id: parseInt(bankId) },
    select: { id: true, value: true },
  });
}

// Submit application
export async function submitApplication(payload: applicationDto) {
  return await prisma.tbl_application.create({
    data: {
      bank_name: payload.bank_name,
      branch_name: payload.branch_name,
      account_name: payload.account_name,
      account_number: payload.account_number,
      status: "DRAFT", // Default to Draft
    },
  });
}
