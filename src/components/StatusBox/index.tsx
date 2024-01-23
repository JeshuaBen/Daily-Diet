import { useTheme } from "styled-components";
import * as S from "./styles";
import { TStatusBox } from "./types";

const StatusBox: React.FC<TStatusBox> = ({
  status,
  title,
  description,
  onPress,
}) => {
  const { COLORS } = useTheme();

  return (
    <S.Container status={status}>
      <S.IconContainer onPress={onPress}>
        <S.Icon
          color={status === "goodMeal" ? COLORS.GREEN300 : COLORS.RED300}
        />
      </S.IconContainer>

      <S.TextWrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.TextWrapper>
    </S.Container>
  );
};

export default StatusBox;
