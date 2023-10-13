import { z } from "zod";

const create = z.object({
  body: z.object({
    review: z.string({
      required_error: "Review is required",
    }),
    rating: z.string({ required_error: "Rating is required" }),
    userId: z.string({ required_error: "User ID is required" }),
    menuId: z.string({ required_error: "Menu ID is required" }),
  }),
});

const update = z.object({
  body: z.object({
    review: z
      .string({
        required_error: "Review is required",
      })
      .optional(),
    rating: z.string({ required_error: "Rating is required" }).optional(),
    userId: z.string({ required_error: "User ID is required" }).optional(),
    menuId: z.string({ required_error: "Menu ID is required" }).optional(),
  }),
});
export const ReviewAndRatingValidation = {
  create,
  update,
};
