// src/routes/tradeStatus.router.ts
import { Router } from "express";
import { TradeStatusController } from "../controllers/tradeStatus.controller";

const router = Router();
const controller = new TradeStatusController();

router.get("/", controller.getAllStatuses);

export default router;
