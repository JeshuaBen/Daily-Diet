export type TStatusBox = {
  status: "badMeal" | "goodMeal";
  title?: string;
  description?: string;
  onPress?: () => void;
};
