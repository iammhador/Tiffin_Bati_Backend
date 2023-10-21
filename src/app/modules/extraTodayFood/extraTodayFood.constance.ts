export interface IExtraTodayFoodData {
  title: string;
  category: string;
  shift: "LUNCH" | "DINNER";
  isCancel?: "YES" | "NO" | null;
  userId: string;
  image?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}
