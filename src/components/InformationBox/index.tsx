import * as S from "./styles";
import { TInformationBox } from "./types";

const InformationBox: React.FC<TInformationBox> = ({
  status,
  variant,
  description,
  total,
}) => {
  return (
    <S.Container status={status} variant={variant}>
      <S.Total>{total}</S.Total>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
};

export default InformationBox;
