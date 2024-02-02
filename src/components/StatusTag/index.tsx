import { useTheme } from "styled-components/native";
import * as S from "./styles";
import { TStatusTag } from "./types";

const StatusTag: React.FC<TStatusTag> = ({ status, title }) => {
  const { COLORS } = useTheme();

  return (
    <S.Container>
      <S.Icon color={status === "goodMeal" ? COLORS.GREEN300 : COLORS.RED300} />
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default StatusTag;
