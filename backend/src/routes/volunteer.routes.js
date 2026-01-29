import {Router} from "express";
import { getVolunteers, createVolunteer, deleteVolunteer, updateVolunteer } from "../controllers/volunteer.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";


const router = Router();

router.get("/volunteers", authMiddleware, getVolunteers);

router.post("/volunteers", createVolunteer);

router.delete("/volunteers/:id", authMiddleware, deleteVolunteer);

router.put("/volunteers/:id", authMiddleware, updateVolunteer);

export default router;