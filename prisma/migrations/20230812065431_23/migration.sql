/*
  Warnings:

  - The primary key for the `timealloc` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `timealloc` table. All the data in the column will be lost.
  - Added the required column `timeallocid` to the `timealloc` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_timealloc" (
    "timeallocid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL,
    "userid" TEXT NOT NULL,
    "remark" TEXT NOT NULL
);
INSERT INTO "new_timealloc" ("date", "remark", "userid") SELECT "date", "remark", "userid" FROM "timealloc";
DROP TABLE "timealloc";
ALTER TABLE "new_timealloc" RENAME TO "timealloc";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
