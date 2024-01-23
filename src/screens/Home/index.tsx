import DietItem from "@components/DietItem";
import * as S from "./styles";
import MainHeader from "@components/MainHeader";
import StatusBox from "@components/StatusBox";
import { FlatList, View } from "react-native";
import { Meals } from "./constants";

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
        data={Meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <S.MealContainer>
            <S.Date>{item.date}</S.Date>
            {item.mealDescription.map((meal, index) => (
              <DietItem
                key={`${item.id}-${index}`} // Unique key for each DietItem
                status={meal.status as "goodMeal" | "badMeal"}
                product={meal.description}
                time={meal.time}
              />
            ))}
          </S.MealContainer>
        )}
      />
    </S.Container>
  );
};

export default Home;
