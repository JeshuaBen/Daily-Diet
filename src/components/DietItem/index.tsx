import * as S from "./styles";
import { TDietItem } from "./types";

const DietItem: React.FC<TDietItem> = ({ time, product, status }) => {
  return (
    <S.Content>
      <S.ItemContainer>
        <S.TimeAndProductWrapper>
          <S.Time>{time}</S.Time>
          <S.Separator />
          <S.Product>{product}</S.Product>
        </S.TimeAndProductWrapper>

        <S.Status status={status} />
      </S.ItemContainer>
    </S.Content>
  );
};

export default DietItem;
