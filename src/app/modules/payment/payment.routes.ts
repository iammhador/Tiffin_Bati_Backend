import express from "express";
import { PaymentsController } from "./payment.controller";

const router = express.Router();

router
  .post("/create-payment-intent", PaymentsController.paymentIntent)
  .post("/", PaymentsController.createPayment);

export const PaymentRoutes = router;
