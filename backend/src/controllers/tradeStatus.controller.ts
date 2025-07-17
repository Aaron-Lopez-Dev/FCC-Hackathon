// src/controllers/tradeStatus.controller.ts
import { Request, Response } from "express";
import { TradeStatusService } from "../services/tradeStatus.service";

export class TradeStatusController {
  private service: TradeStatusService;

  constructor() {
    this.service = new TradeStatusService();
  }

  getAllStatuses = async (req: Request, res: Response) => {
    try {
      const statuses = await this.service.getAllStatuses();
      res.json(statuses);
    } catch (error) {
      res.status(500).json({ message: "Failed to get trade statuses", error });
    }
  };
}
