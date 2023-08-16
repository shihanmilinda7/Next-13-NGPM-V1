-- CreateTable
CREATE TABLE "timeallocdetails" (
    "timeallocdetailid" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "timeallocid" INTEGER NOT NULL,
    "projectid" INTEGER NOT NULL,
    "time" TEXT NOT NULL,
    "remark" TEXT NOT NULL
);
