/*
  Warnings:

  - Added the required column `isActive` to the `Swaps` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Swaps" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "guid" TEXT NOT NULL,
    "startOn" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endOn" DATETIME,
    "tradeRequestId" INTEGER NOT NULL,
    "statusId" INTEGER NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    CONSTRAINT "Swaps_tradeRequestId_fkey" FOREIGN KEY ("tradeRequestId") REFERENCES "TradeRequests" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Swaps_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "SwapStatuses" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Swaps" ("endOn", "guid", "id", "startOn", "statusId", "tradeRequestId") SELECT "endOn", "guid", "id", "startOn", "statusId", "tradeRequestId" FROM "Swaps";
DROP TABLE "Swaps";
ALTER TABLE "new_Swaps" RENAME TO "Swaps";
CREATE UNIQUE INDEX "Swaps_guid_key" ON "Swaps"("guid");
CREATE UNIQUE INDEX "Swaps_tradeRequestId_key" ON "Swaps"("tradeRequestId");
CREATE INDEX "Swaps_statusId_idx" ON "Swaps"("statusId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
