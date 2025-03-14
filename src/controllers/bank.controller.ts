import { Router } from "express";
import {
  getBanks,
  getBranchesByBankId,
  submitApplication,
} from "../services/bank.service";
import genericValidationMiddleware from "../middlewares/validation.middleware";
import { applicationDto } from "../dtos/application.dto";

export const bankController = Router();

bankController.get("/banks", async (req, res, next) => {
  try {
    const banks = await getBanks();
    res.json(banks);
  } catch (error) {
    next(error);
  }
});

bankController.get("/branches", async (req, res, next) => {
  try {
    const { bank_id } = req.query;
    if (!bank_id) {
      res.status(400).json({ error: "bank_id is required" });
    }
    const branches = await getBranchesByBankId(bank_id as string);
    res.json(branches);
  } catch (error) {
    next(error);
  }
});

bankController.post(
  "/applications/submit",
  genericValidationMiddleware(applicationDto, "body"),
  async (req, res, next) => {
    try {
      const application = await submitApplication(req.validatedData);
      res.status(201).json(application);
    } catch (error) {
      next(error);
    }
  }
);
