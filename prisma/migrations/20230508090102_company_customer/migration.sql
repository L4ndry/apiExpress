-- CreateTable
CREATE TABLE "Company" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "industry" TEXT,
    "createdAt" DATETIME
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullName" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "role" TEXT,
    "createdAt" DATETIME
);
