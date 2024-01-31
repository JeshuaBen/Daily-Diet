export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      meals: undefined;
      statistics: {
        percentage: string;
        status: "badMeal" | "goodMeal";
      };
      newMeal: undefined;
      feedback: {
        status: "badMeal" | "goodMeal";
      };
    }
  }
}
