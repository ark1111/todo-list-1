import { Router } from "express";
import { createTask, getTasks } from "../handlers/tasks";

const router = Router();

router.get("/", getTasks);

router.post("/",createTask)

export default router;
