export type MealStorageDTO = {
  date: string;
  id: string;
  data: MealData[];
};

type MealData = {
  id: string;
  time: string;
  description: string;
  status: "goodMeal" | "badMeal";
};
