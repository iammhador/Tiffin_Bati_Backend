/*
  Warnings:

  - You are about to drop the column `adminId` on the `all_users` table. All the data in the column will be lost.
  - You are about to drop the column `superAdminId` on the `all_users` table. All the data in the column will be lost.
  - Added the required column `email` to the `all_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `all_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `all_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `all_users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "all_users" DROP CONSTRAINT "all_users_adminId_fkey";

-- DropForeignKey
ALTER TABLE "all_users" DROP CONSTRAINT "all_users_superAdminId_fkey";

-- DropForeignKey
ALTER TABLE "all_users" DROP CONSTRAINT "all_users_userId_fkey";

-- AlterTable
ALTER TABLE "all_users" DROP COLUMN "adminId",
DROP COLUMN "superAdminId",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;
