import { prisma } from "../config/prisma";

export class SwapStatusRepository {
  async getAllStatuses() {
    return await prisma.swapStatuses.findMany();
  }
}
