import { Router } from "express";
import { getTasks } from "../handlers/tasks";

const router = Router();

router.get("/", getTasks);

export default router;
