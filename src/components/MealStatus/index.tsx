import { useTheme } from "styled-components/native";
import * as S from "./styles";
import { TMealStatus } from "./types";

const MealStatus: React.FC<TMealStatus> = ({
  variant,
  isSelected,
  text,
  setIsSelected,
}) => {
  const { COLORS } = useTheme();

  return (
    <S.Content
      isSelected={isSelected}
      onPress={setIsSelected}
      variant={variant}
    >
      <S.Icon
        color={variant === "goodMeal" ? COLORS.GREEN300 : COLORS.RED300}
      />
      <S.Text>{text}</S.Text>
    </S.Content>
  );
};

export default MealStatus;
