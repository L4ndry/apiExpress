-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT,
    "phoneNumber" TEXT,
    "email" TEXT,
    "userName" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true
);
