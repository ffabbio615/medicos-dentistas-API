import cors from "cors";
import express from "express";
import volunteerRoutes from "./src/routes/volunteer.routes.js";
import authRoutes from "./src/routes/auth.routes.js";
import userRoutes from "./src/routes/userLogin.routes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", volunteerRoutes);

app.use("/auth", authRoutes);

app.use("/user", userRoutes);

export default app;