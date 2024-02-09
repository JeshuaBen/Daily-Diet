import { TouchableOpacityProps } from "react-native";

export type TButton = TouchableOpacityProps & {
  variant: "primary" | "secondary";
  title?: string;
  hasIcon?: boolean;
  Icon?: JSX.Element;
};
