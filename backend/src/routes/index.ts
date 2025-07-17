import { Router } from "express";
import auth from "./auth.routes";
import users from "./user.routes";
import skillsRouter from "./skills.routes";
import swapStatusRouter from "./swapStatus.router";
import tradeStatusRouter from "./tradeStatus.router";


const router = Router();
router.use("/auth", auth);
router.use("/users", users);
router.use("/skills", skillsRouter);
router.use("/swapStatus", swapStatusRouter);
router.use("/tradeStatus", tradeStatusRouter)

export default router;
