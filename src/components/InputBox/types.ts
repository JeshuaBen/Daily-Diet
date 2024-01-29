export type TInputBox = {
  variant: "text" | "textarea";
  title?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  halfSize?: boolean;
};
