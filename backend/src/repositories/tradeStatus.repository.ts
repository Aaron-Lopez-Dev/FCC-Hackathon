// src/repositories/tradeStatus.repository.ts
import { prisma } from "../config/prisma"

export class TradeStatusRepository {
  async getAllStatuses() {
    return await prisma.tradeRequestStatuses.findMany();
  }
}
