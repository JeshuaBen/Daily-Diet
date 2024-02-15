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

  const [newMealForm, setNewMealForm] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    isGoodMeal: "",
  });

  const { COLORS } = useTheme();
  const navigation = useNavigation();

  const handleInputChange = (
    name: "name" | "description" | "date" | "time" | "isGoodMeal",
    value: string
  ) => {
    setNewMealForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChange = (text: string) => {
    let newText = text.replace(/[^\d]/g, ""); // Remove tudo que não é dígito

    // Aplica a máscara conforme o usuário digita
    if (newText.length > 2 && newText.length <= 4) {
      newText = newText.replace(/^(\d{2})(\d+)/, "$1/$2");
    } else if (newText.length > 4) {
      newText = newText.replace(/^(\d{2})(\d{2})(\d+)/, "$1/$2/$3");
    }

    handleInputChange("date", newText);
  };

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
          <InputBox
            variant="text"
            title="Nome"
            onChangeText={(value) => handleInputChange("name", value)}
          />
          <InputBox
            variant="textarea"
            title="Descrição"
            onChangeText={(value) => handleInputChange("description", value)}
          />

          <S.DateTimeWrapper>
            <InputBox
              value={newMealForm.date}
              variant="text"
              title="Data"
              halfSize
              keyboardType="numeric"
              placeholder="DD/MM/AA"
              maxLength={8}
              onChangeText={handleChange}
            />
            <InputBox
              variant="text"
              title="Hora"
              halfSize
              keyboardType="numeric"
              placeholder="HH:MM"
              maxLength={5}
              onChangeText={(value) => handleInputChange("time", value)}
            />
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
