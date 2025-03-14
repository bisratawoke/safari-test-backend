import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Secret key for JWT signing
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// Generate Token Middleware
export function generateTokenMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  try {
    const user = req.validatedData; // Assuming this is set by validation middleware

    // Create JWT payload
    const payload = { userName: user.userName };

    // Generate Token (expires in 1 hour)
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
}

// Validate Token Middleware
export function validateTokenMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // req.user = decoded; // Attach user data to request
    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid or expired token" });
  }
}
