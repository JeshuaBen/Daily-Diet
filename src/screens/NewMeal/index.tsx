import SecondaryHeader from "@components/SecondaryHeader";
import * as S from "./styles";
import { useTheme } from "styled-components/native";
import { StatusBar } from "expo-status-bar";

const NewMeal: React.FC = () => {
  const { COLORS } = useTheme();

  return (
    <>
      <StatusBar backgroundColor={COLORS.GRAY300} translucent />
      <S.Container>
        <SecondaryHeader
          variant="secondary"
          title="Nova Refeição"
          bgColor={COLORS.GRAY300}
        />
        <S.Content></S.Content>
      </S.Container>
    </>
  );
};

export default NewMeal;
