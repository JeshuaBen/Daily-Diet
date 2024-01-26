export type TSecondaryHeader = {
  variant: "primary" | "secondary";
  status?: "goodMeal" | "badMeal";
  percentage?: string;
  title?: string;
  bgColor?: string;
  onPress?: () => void;
};
