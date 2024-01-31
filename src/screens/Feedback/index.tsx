import Button from "@components/Button";
import * as S from "./styles";
import { TFeedbackScreen } from "./types";
import femaleImg from "@assets/femaleIllustration.png";
import maleImg from "@assets/maleIllustration.png";

const Feedback: React.FC<TFeedbackScreen> = ({ status }) => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title status={status}>
          {status === "goodMeal" ? "Continue assim!" : "Que pena!"}
        </S.Title>

        <S.Description>
          {status === "goodMeal" ? "Você continua" : "Você"}{" "}
          <S.StrongDescription>
            {status === "goodMeal" ? "dentro da dieta." : "saiu da dieta"}
          </S.StrongDescription>{" "}
          {status === "goodMeal"
            ? "Muito bem!"
            : ", mas continue se esforçando e não desista!"}
        </S.Description>
      </S.TitleWrapper>

      <S.Image source={status === "goodMeal" ? femaleImg : maleImg} />

      <Button
        variant="primary"
        title="Ir para a página inicial"
        onPress={() => {}}
      />
    </S.Container>
  );
};

export default Feedback;
