import DietItem from "@components/DietItem";
import * as S from "./styles";
import MainHeader from "@components/MainHeader";
import StatusBox from "@components/StatusBox";
import { FlatList } from "react-native";

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

      <FlatList
        data={[
          {
            time: "20:00",
            description: "Refeição 1",
            status: "badMeal",
          },
        ]}
        keyExtractor={(item) => item.description}
        renderItem={({ item }) => (
          <DietItem
            time={item.time}
            product={item.description}
            status={item.status as "badMeal" | "goodMeal"}
          />
        )}
      />
    </S.Container>
  );
};

export default Home;
