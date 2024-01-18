import * as S from "./styles";
import { TStatusBox } from "./types";

const StatusBox: React.FC<TStatusBox> = ({ status, title, description }) => {
  return (
    <S.Container status={status}>
      <S.IconContainer>
        <S.Icon />
      </S.IconContainer>

      <S.TextWrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.TextWrapper>
    </S.Container>
  );
};

export default StatusBox;
