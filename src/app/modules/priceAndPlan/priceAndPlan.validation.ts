import { z } from "zod";

const create = z.object({
  body: z.object({
    subscription: z.string({
      required_error: "Subscription title is required",
    }),
    content: z.string({ required_error: "Subscription content is required" }),
    price: z.string({ required_error: "Price is required" }),
    adminId: z.string({ required_error: "Admin ID is required" }),
  }),
});

const update = z.object({
  body: z.object({
    subscription: z
      .string({
        required_error: "Subscription title is required",
      })
      .optional(),
    content: z
      .string({ required_error: "Subscription content is required" })
      .optional(),
    price: z.string({ required_error: "Price is required" }).optional(),
    adminId: z.string({ required_error: "Admin ID is required" }).optional(),
  }),
});

export const PriceAndPlanValidation = {
  create,
  update,
};
