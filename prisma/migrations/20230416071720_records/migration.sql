-- CreateTable
CREATE TABLE "Record" (
    "id" SERIAL NOT NULL,
    "owner" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Record_pkey" PRIMARY KEY ("id")
);
