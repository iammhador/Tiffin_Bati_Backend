/*
  Warnings:

  - You are about to drop the `Review_and_rating` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Review_and_rating" DROP CONSTRAINT "Review_and_rating_menuId_fkey";

-- DropForeignKey
ALTER TABLE "Review_and_rating" DROP CONSTRAINT "Review_and_rating_userId_fkey";

-- DropTable
DROP TABLE "Review_and_rating";

-- CreateTable
CREATE TABLE "review_and_rating" (
    "id" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "menuId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "review_and_rating_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "review_and_rating" ADD CONSTRAINT "review_and_rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review_and_rating" ADD CONSTRAINT "review_and_rating_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
