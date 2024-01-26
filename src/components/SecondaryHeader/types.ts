export type TSecondaryHeader = {
  variant: "primary" | "secondary";
  status?: "goodMeal" | "badMeal";
  percentage?: string;
  title?: string;
  onPress?: () => void;
};
