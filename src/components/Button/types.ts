export type TButton = {
  variant: "primary" | "secondary";
  title?: string;
  hasIcon?: boolean;
  Icon?: JSX.Element;
  onPress?: () => void;
};
