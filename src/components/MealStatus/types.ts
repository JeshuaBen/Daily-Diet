export type TMealStatus = {
  variant?: "badMeal" | "goodMeal";
  isSelected: "goodMeal" | "badMeal";
  setIsSelected?: () => void;
  text?: string;
};
