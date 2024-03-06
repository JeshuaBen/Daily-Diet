import { AppError } from "@utils/AppError";
import { MealStorageDTO } from "./MealStorageDTO";
import { getAllMeals } from "./getAllMeals";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";

export const editMeal = async (id: string, newMealInfo: MealStorageDTO) => {
  try {
    const storedMeals = await getAllMeals();

    const mealIndex = storedMeals.findIndex((meal) => meal.id === id);

    if (mealIndex === -1) {
      throw new AppError("Meal not found");
    }

    storedMeals[mealIndex] = newMealInfo;

    const updatedMealStorage = JSON.stringify(storedMeals);

    await AsyncStorage.setItem(MEALS_COLLECTION, updatedMealStorage);
  } catch (error) {
    throw error;
  }
};
