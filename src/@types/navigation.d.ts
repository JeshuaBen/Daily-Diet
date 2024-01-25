export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        percentage: string;
        status: "badMeal" | "goodMeal";
      };
    }
  }
}
