import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/perfil", authMiddleware, (req, res) => {
  res.json({ message: "Rota protegida", username: req.username });
});

export default router;