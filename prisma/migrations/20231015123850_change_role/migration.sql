-- AlterTable
ALTER TABLE "admins" ALTER COLUMN "role" SET DEFAULT 'admin';

-- AlterTable
ALTER TABLE "super_admin" ALTER COLUMN "role" SET DEFAULT 'super-admin';

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'user';
