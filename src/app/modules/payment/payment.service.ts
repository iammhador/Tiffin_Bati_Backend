import config from "../../../config";
import { prisma } from "../../../shared/prisma";

const stripe = require("stripe")(config.stripe_secret);

const paymentIntent = async (body: any) => {
  const amount = body?.price?.price * 100;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "bdt",
    payment_method_types: ["card"],
  });

  return { clientSecret: paymentIntent.client_secret };
};

const createPayment = async (body: any) => {
  const result = await prisma.pAYMENT.create({
    data: {
      price: body?.payment?.price,
      transactionId: body?.payment?.transactionId,
      userName: body?.payment?.userName,
      userId: body?.payment?.userId,
    },
  });

  return result;
};

export const PaymentsService = {
  paymentIntent,
  createPayment,
};
