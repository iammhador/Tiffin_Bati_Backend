/*
  Warnings:

  - You are about to drop the column `role` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `user_information_update` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `address` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactNo` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dataOfBirth` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AdminRole" AS ENUM ('Administrator', 'Moderator', 'Editor', 'Content_Creator', 'Support_Staff', 'Analytics_Manager', 'Security_Manager');

-- CreateEnum
CREATE TYPE "SubscriptionType" AS ENUM ('Yearly', 'Monthly');

-- DropForeignKey
ALTER TABLE "user_information_update" DROP CONSTRAINT "user_information_update_userId_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "role",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "contactNo" TEXT NOT NULL,
ADD COLUMN     "dataOfBirth" TEXT NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL,
ADD COLUMN     "profileImage" TEXT;

-- DropTable
DROP TABLE "user_information_update";

-- DropEnum
DROP TYPE "UserType";

-- CreateTable
CREATE TABLE "super_admin" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "dataOfBirth" TEXT NOT NULL,
    "contactNo" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "profileImage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "super_admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admins" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "dataOfBirth" TEXT NOT NULL,
    "contactNo" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "profileImage" TEXT,
    "role" "AdminRole" DEFAULT 'Moderator',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "admins_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "menu" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "price_and_plan" (
    "id" TEXT NOT NULL,
    "subscription" "SubscriptionType" NOT NULL,
    "content" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "price_and_plan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscription_model" (
    "id" TEXT NOT NULL,
    "subscription" "SubscriptionType" NOT NULL,
    "price" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subscription_model_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "today_food" (
    "id" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "today_food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review_and_rating" (
    "id" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "rating" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "menuId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Review_and_rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "super_admin_email_key" ON "super_admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");

-- AddForeignKey
ALTER TABLE "price_and_plan" ADD CONSTRAINT "price_and_plan_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscription_model" ADD CONSTRAINT "subscription_model_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "today_food" ADD CONSTRAINT "today_food_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review_and_rating" ADD CONSTRAINT "Review_and_rating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review_and_rating" ADD CONSTRAINT "Review_and_rating_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog" ADD CONSTRAINT "blog_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admins"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
