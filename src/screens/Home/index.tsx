import MainHeader from "@components/MainHeader";
import * as S from "./styles";
import StatusBox from "@components/StatusBox";

const Home: React.FC = () => {
  return (
    <S.Container>
      <MainHeader />

      <StatusBox
        status="goodMeal"
        title="90,86%"
        description="das refeições dentro da dieta"
      />

      <S.ButtonWrapper>
        <S.Meals>Refeições</S.Meals>

        <S.NewMeal>
          <S.PlusIcon />
          <S.ButtonDescription>Nova refeição</S.ButtonDescription>
        </S.NewMeal>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default Home;
