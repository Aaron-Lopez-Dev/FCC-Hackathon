import { Request, Response } from "express";
import { SwapStatusService } from "../services/swapStatus.service";



export class SwapStatusController {
  private service: SwapStatusService;

  constructor() {
    this.service = new SwapStatusService();
  }

  getAllStatuses = async (req: Request, res: Response) => {
    try {
      const statuses = await this.service.getAllStatuses();
      res.json(statuses);
    } catch (error) {
      res.status(500).json({ message: "Failed to get statuses", error });
    }
  };
}
