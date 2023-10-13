export interface IPriceAndPlanData {
  subscription: "Monthly" | "Yearly";
  content: string;
  price: string;
  adminId: string;
}
