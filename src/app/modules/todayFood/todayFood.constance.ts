export interface ITodayFoodData {
  title: string;
  category: string;
  shift: "LUNCH" | "DINNER";
  adminId: string;
  image?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}
