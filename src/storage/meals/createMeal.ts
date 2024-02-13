import { MealStorageDTO } from "@storage/meals/MealStorageDTO";
import { getAllMeals } from "./getAllMeals";
import { AppError } from "@utils/AppError";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const createMeal = async (newMeal: MealStorageDTO) => {
  try {
    const storedMeals = await getAllMeals();

    const mealAlreadyIncluded = storedMeals.includes(newMeal.id);

    if (mealAlreadyIncluded) {
      throw new AppError("Esta refeição já está cadastrada");
    }

    const storage = JSON.stringify([...storedMeals, newMeal]);

    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
};
