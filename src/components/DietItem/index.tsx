import * as S from "./styles";
import { TDietItem } from "./types";

const DietItem: React.FC<TDietItem> = ({ time, product, status }) => {
  return (
    <S.Container>
      <S.TimeAndProductWrapper>
        <S.Time>{time}</S.Time>
        <S.Separator />
        <S.Product>{product}</S.Product>
      </S.TimeAndProductWrapper>

      <S.Status status={status} />
    </S.Container>
  );
};

export default DietItem;
