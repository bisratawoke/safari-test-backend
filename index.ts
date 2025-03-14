import express from "express";
import cors from "cors";
import { config } from "dotenv";
import errorHandler from "./src/utils/utils.error-handler";
import { authController } from "./src/controllers/auth.controller";
import { bankController } from "./src/controllers/bank.controller";
config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", authController);
app.use("/api", bankController);
app.use(errorHandler);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
