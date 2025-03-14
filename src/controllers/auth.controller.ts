import { Router } from "express";
import genericValidationMiddleware from "../middlewares/validation.middleware";
import { authDto } from "../dtos/auth.dto";
import { login, register } from "../services/auth.service";
import { generateTokenMiddleware } from "../middlewares/jwt.middleware";
import express from "express";
export const authController = Router();

authController.post(
  "/login",
  genericValidationMiddleware(authDto, "body"),
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const user = await login(req.validatedData);
      req.validatedData = user;
      next();
    } catch (error) {
      next(error);
    }
  },
  generateTokenMiddleware
);

authController.post(
  "/register",
  genericValidationMiddleware(authDto, "body"),
  async (req, res, next) => {
    try {
      const newUser = await register(req.validatedData);
      res
        .status(201)
        .json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      next(error);
    }
  }
);
