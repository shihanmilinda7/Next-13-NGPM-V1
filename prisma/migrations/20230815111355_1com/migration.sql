-- CreateTable
CREATE TABLE "staff" (
    "staffid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "contracttype" TEXT NOT NULL,
    "contactno" TEXT NOT NULL,
    "nic" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
