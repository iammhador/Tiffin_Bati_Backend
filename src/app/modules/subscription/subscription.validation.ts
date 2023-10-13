import { z } from "zod";

const create = z.object({
  body: z.object({
    subscription: z.string({
      required_error: "Subscription title is required",
    }),
    price: z.string({ required_error: "Subscription price is required" }),
    status: z.string({ required_error: "Status price is required" }).optional(),
  }),
});

const update = z.object({
  body: z.object({
    subscription: z
      .string({
        required_error: "Subscription title is required",
      })
      .optional(),
    price: z
      .string({ required_error: "Subscription price is required" })
      .optional(),
    status: z.string({ required_error: "Status price is required" }).optional(),
  }),
});

export const SubscriptionValidation = {
  create,
  update,
};
