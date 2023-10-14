/*
  Warnings:

  - You are about to drop the column `shift` on the `new_food` table. All the data in the column will be lost.
  - Added the required column `shift` to the `today_food` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "new_food" DROP COLUMN "shift";

-- AlterTable
ALTER TABLE "today_food" ADD COLUMN     "shift" "Shift" NOT NULL;
