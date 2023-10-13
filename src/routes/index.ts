import express from "express";
import { SuperAdminRoutes } from "../app/modules/superAdmin/superAdmin.routes";
import { AdminRoutes } from "../app/modules/admin/admin.routes";
import { UsersRoutes } from "../app/modules/users/users.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/super-admin",
    route: SuperAdminRoutes,
  },
  {
    path: "/admin",
    route: AdminRoutes,
  },
  {
    path: "/users",
    route: UsersRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
