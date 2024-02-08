import express from "express";
import { PaymentsController } from "./payment.controller";

const router = express.Router();

router
  .get("/getAllPayments", PaymentsController.getAllPayments)
  .get("/getSinglePayment/:id", PaymentsController.getSinglePayments)
  .post("/create-payment-intent", PaymentsController.paymentIntent)
  .post("/", PaymentsController.createPayment);

export const PaymentRoutes = router;
