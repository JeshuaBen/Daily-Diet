import DietItem from "@components/DietItem";
import * as S from "./styles";
import MainHeader from "@components/MainHeader";
import StatusBox from "@components/StatusBox";
import { FlatList, SectionList, View } from "react-native";
import { MealsInfo } from "./constants";
import { useNavigation } from "@react-navigation/native";
import Button from "@components/Button";

const Meals: React.FC = () => {
  const navigation = useNavigation();

  const handleOpenStatistics = (
    percentage: string,
    status: "badMeal" | "goodMeal"
  ) => {
    navigation.navigate("statistics", { percentage, status });
  };

  const handleOpenNewMeal = () => {
    navigation.navigate("newMeal");
  };

  return (
    <S.Container>
      <MainHeader />

      <StatusBox
        status="goodMeal"
        title="90,86%"
        description="das refeições dentro da dieta"
        onPress={() => handleOpenStatistics("90,86%", "badMeal")}
      />

      <S.ButtonWrapper>
        <S.Meals>Refeições</S.Meals>

        <Button
          variant="primary"
          Icon={<S.PlusIcon />}
          hasIcon
          title="Nova refeição"
          onPress={handleOpenNewMeal}
        />
      </S.ButtonWrapper>

      <SectionList
        sections={MealsInfo}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <DietItem
            status={item.status as "goodMeal" | "badMeal"}
            product={item.description}
            time={item.time}
            onPress={() =>
              navigation.navigate("mealDetails", {
                id: `${item.id}`,
              })
            }
          />
        )}
        renderSectionHeader={({ section: { date } }) => <S.Date>{date}</S.Date>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      />
    </S.Container>
  );
};

export default Meals;
