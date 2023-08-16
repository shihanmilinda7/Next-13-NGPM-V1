/*
  Warnings:

  - The primary key for the `projects` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `projects` table. All the data in the column will be lost.
  - Added the required column `projectid` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_projects" (
    "projectid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "starteddate" TEXT NOT NULL,
    "enddate" TEXT NOT NULL,
    "status" TEXT NOT NULL
);
INSERT INTO "new_projects" ("enddate", "name", "starteddate", "status") SELECT "enddate", "name", "starteddate", "status" FROM "projects";
DROP TABLE "projects";
ALTER TABLE "new_projects" RENAME TO "projects";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
