import SecondaryHeader from "@components/SecondaryHeader";
import * as S from "./styles";
import { useTheme } from "styled-components/native";
import { StatusBar } from "expo-status-bar";

const MealDetails: React.FC = () => {
  const { COLORS } = useTheme();

  return (
    <>
      <StatusBar backgroundColor={COLORS.GREEN100} translucent />
      <S.Container>
        <SecondaryHeader
          variant="secondary"
          status="goodMeal"
          title="Refeição"
          bgColor={COLORS.GREEN100}
        />
      </S.Container>
    </>
  );
};

export default MealDetails;
