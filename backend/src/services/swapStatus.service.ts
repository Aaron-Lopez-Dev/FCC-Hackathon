import { SwapStatusRepository } from "../repositories/swapStatus.repository";

export class SwapStatusService {
  private repository: SwapStatusRepository;

  constructor() {
    this.repository = new SwapStatusRepository();
  }

  async getAllStatuses() {
    return await this.repository.getAllStatuses();
  }
}

