// src/services/tradeStatus.service.ts
import { TradeStatusRepository } from "../repositories/tradeStatus.repository";

export class TradeStatusService {
  private repository: TradeStatusRepository;

  constructor() {
    this.repository = new TradeStatusRepository();
  }

  async getAllStatuses() {
    return await this.repository.getAllStatuses();
  }
}
