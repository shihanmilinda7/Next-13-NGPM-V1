-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "starteddate" DATETIME NOT NULL,
    "enddate" DATETIME NOT NULL,
    "status" TEXT NOT NULL
);
