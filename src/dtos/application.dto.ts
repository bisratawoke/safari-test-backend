import { z } from "zod";

export const applicationDto = z.object({
  bank_name: z.string().min(1, "Bank name is required"),
  branch_name: z.string().min(1, "Branch name is required"),
  account_name: z.string().min(1, "Account name is required"),
  account_number: z.string().min(1, "Account number is required"),
  status: z.enum(["Draft", "Submitted"]),
});

export type applicationDto = z.infer<typeof applicationDto>;
