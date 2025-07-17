import { Router } from "express";
import { SwapStatusController } from "../controllers/swapstatus.controller";

const router = Router();
const controller = new SwapStatusController();

router.get("/", controller.getAllStatuses);

export default router;
