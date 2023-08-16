/*
  Warnings:

  - The primary key for the `timealloc` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `timealloc` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_timealloc" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL,
    "userid" TEXT NOT NULL,
    "remark" TEXT NOT NULL
);
INSERT INTO "new_timealloc" ("date", "id", "remark", "userid") SELECT "date", "id", "remark", "userid" FROM "timealloc";
DROP TABLE "timealloc";
ALTER TABLE "new_timealloc" RENAME TO "timealloc";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
