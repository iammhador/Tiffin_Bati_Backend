import express from "express";
import { SuperAdminRoutes } from "../app/modules/superAdmin/superAdmin.routes";
import { AdminRoutes } from "../app/modules/admin/admin.routes";
import { UsersRoutes } from "../app/modules/users/users.routes";
import { MenuRoutes } from "../app/modules/menu/menu.routes";
import { PriceAndPlanRoutes } from "../app/modules/priceAndPlan/priceAndPlan.routes";
import { SubscriptionRoutes } from "../app/modules/subscription/subscription.routes";
import { TodayFoodRoutes } from "../app/modules/todayFood/todayFood.routes";
import { ReviewAndRatingRoutes } from "../app/modules/reviewAndRating/reviewAndRating.routes";
import { BlogRoutes } from "../app/modules/blog/blog.routes";
import { FAQRoutes } from "../app/modules/faq/faq.routes";
import { FeedbackRoutes } from "../app/modules/feedback/feedback.routes";
import { AllUsersRoutes } from "../app/modules/allUsers/allUsers.routes";
import { NewFoodRoutes } from "../app/modules/newFood/newFood.routes";
import { AuthRoutes } from "../app/modules/auth/auth.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/all-users",
    route: AllUsersRoutes,
  },
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
  {
    path: "/menu",
    route: MenuRoutes,
  },
  {
    path: "/price-and-plan",
    route: PriceAndPlanRoutes,
  },
  {
    path: "/subscription",
    route: SubscriptionRoutes,
  },
  {
    path: "/today-food",
    route: TodayFoodRoutes,
  },
  {
    path: "/new-food",
    route: NewFoodRoutes,
  },
  {
    path: "/review-and-rating",
    route: ReviewAndRatingRoutes,
  },
  {
    path: "/feedback",
    route: FeedbackRoutes,
  },
  {
    path: "/blog",
    route: BlogRoutes,
  },
  {
    path: "/faq",
    route: FAQRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
