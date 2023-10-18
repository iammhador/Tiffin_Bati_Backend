export interface ISubscriptionData {
  subscription: "Monthly" | "Yearly";
  price: string;
  userId: string;
  status?: "REQUESTED" | "ACTIVATE" | "CANCEL" | null;
}
