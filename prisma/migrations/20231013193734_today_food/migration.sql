/*
  Warnings:

  - Added the required column `category` to the `today_food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shift` to the `today_food` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `today_food` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Shift" AS ENUM ('LUNCH', 'DINNER');

-- AlterTable
ALTER TABLE "today_food" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "shift" "Shift" NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
