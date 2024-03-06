import { getAllMeals } from "./getAllMeals";

export const getOneMeal = async (id: string) => {
  const storedMeals = await getAllMeals();

  return storedMeals.find((meal) => meal.id === id);
};
