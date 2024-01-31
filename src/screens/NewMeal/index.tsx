import SecondaryHeader from "@components/SecondaryHeader";
import * as S from "./styles";
import { useTheme } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import InputBox from "@components/InputBox";
import Button from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import MealStatus from "@components/MealStatus";
import { useState } from "react";

const NewMeal: React.FC = () => {
  const [isSelected, setIsSelected] = useState<string>("");

  const { COLORS } = useTheme();
  const navigation = useNavigation();

  return (
    <>
      <StatusBar backgroundColor={COLORS.GRAY300} translucent />
      <S.Container>
        <SecondaryHeader
          variant="secondary"
          title="Nova refeição"
          bgColor={COLORS.GRAY300}
          onPress={() => navigation.goBack()}
        />
        <S.Content>
          <InputBox variant="text" title="Nome" />
          <InputBox variant="textarea" title="Descrição" />

          <S.DateTimeWrapper>
            <InputBox variant="text" title="Data" halfSize />
            <InputBox variant="text" title="Hora" halfSize />
          </S.DateTimeWrapper>

          <S.ButtonContainer>
            <S.Label>Está dentro da dieta?</S.Label>
            <S.Wrapper>
              <MealStatus
                isSelected={isSelected as "goodMeal" | "badMeal"}
                setIsSelected={() => setIsSelected("goodMeal")}
                variant="goodMeal"
                text="Sim"
              />
              <MealStatus
                isSelected={isSelected as "goodMeal" | "badMeal"}
                setIsSelected={() => setIsSelected("badMeal")}
                variant="badMeal"
                text="Não"
              />
            </S.Wrapper>
          </S.ButtonContainer>

          <S.ButtonWrapper>
            <Button
              variant="primary"
              title="Cadastrar refeição"
              onPress={() =>
                navigation.navigate("feedback", { status: "badMeal" })
              }
            />
          </S.ButtonWrapper>
        </S.Content>
      </S.Container>
    </>
  );
};

export default NewMeal;
