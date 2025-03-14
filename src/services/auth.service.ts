import { authDto } from "../dtos/auth.dto";
import { findUser, createUser } from "./user.service";
import bcrypt from "bcrypt";

export async function login(payload: authDto) {
  const user = await findUser(payload.userName, payload.password);

  if (!user) {
    throw new Error("User not found");
  }

  const isPasswordValid = await bcrypt.compare(payload.password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  return user;
}

export async function register(payload: authDto) {
  const hashedPassword = await bcrypt.hash(payload.password, 10);
  return await createUser(payload.userName, hashedPassword);
}
