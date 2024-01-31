import Button from "@components/Button";
import * as S from "./styles";

import femaleImg from "@assets/femaleIllustration.png";
import maleImg from "@assets/maleIllustration.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TFeedbackScreen } from "./types";
import { useTheme } from "styled-components/native";

const Feedback: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { status } = route.params as TFeedbackScreen;
  const { COLORS } = useTheme();

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title
          style={{
            color: status === "goodMeal" ? COLORS.GREEN300 : COLORS.RED300,
          }}
        >
          {status === "goodMeal" ? "Continue assim!" : "Que pena!"}
        </S.Title>

        <S.Description>
          {status === "goodMeal" ? "Você continua" : "Você"}{" "}
          <S.StrongDescription>
            {status === "goodMeal" ? "dentro da dieta." : "saiu da dieta,"}
          </S.StrongDescription>{" "}
          {status === "goodMeal"
            ? "Muito bem!"
            : "mas continue se esforçando e não desista!"}
        </S.Description>
      </S.TitleWrapper>

      <S.ImageWrapper>
        <S.Image source={status === "goodMeal" ? femaleImg : maleImg} />

        <Button
          variant="primary"
          title="Ir para a página inicial"
          onPress={() => navigation.navigate("meals")}
        />
      </S.ImageWrapper>
    </S.Container>
  );
};

export default Feedback;
