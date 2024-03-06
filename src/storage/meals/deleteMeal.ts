import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllMeals } from "./getAllMeals";
import { MEALS_COLLECTION } from "@storage/storageConfig";

export const deleteMeal = async (id: string) => {
  try {
    const storedMeals = await getAllMeals();

    const filteredMeals = storedMeals.filter((meal) => meal.id !== id);

    const meals = JSON.stringify(filteredMeals);

    await AsyncStorage.setItem(`${MEALS_COLLECTION}`, meals);
  } catch (error) {
    throw error;
  }
};
