import { ModalProps } from "react-native";

export type TDeleteMealModal = ModalProps & {
  onCancel: () => void;
  onConfirm: () => void;
};
