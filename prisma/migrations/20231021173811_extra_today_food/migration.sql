-- CreateEnum
CREATE TYPE "isCancel" AS ENUM ('YES', 'NO');

-- AlterTable
ALTER TABLE "today_food" ADD COLUMN     "isCancel" "isCancel";

-- CreateTable
CREATE TABLE "today_food_extra" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "image" TEXT,
    "shift" "Shift" NOT NULL,
    "isCancel" "isCancel",
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "today_food_extra_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "today_food_extra" ADD CONSTRAINT "today_food_extra_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
