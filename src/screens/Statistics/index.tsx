import SecondaryHeader from "@components/SecondaryHeader";
import * as S from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatisticsRouteParams } from "./types";
import { useTheme } from "styled-components/native";
import InformationBox from "@components/InformationBox";
import { StatusBar } from "expo-status-bar";

const Statistics: React.FC = () => {
  const { COLORS } = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { percentage, status } = route.params as StatisticsRouteParams;

  console.log(status);

  return (
    <>
      <StatusBar
        backgroundColor={
          status === "goodMeal" ? COLORS.GREEN100 : COLORS.RED100
        }
        translucent
      />
      <S.Container
        style={{
          backgroundColor:
            status === "goodMeal" ? COLORS.GREEN100 : COLORS.RED100,
        }}
      >
        <SecondaryHeader
          variant="primary"
          status={status}
          percentage={percentage}
          onPress={() => navigation.goBack()}
        />

        <S.Content>
          <S.Title>Estatísticas Gerais</S.Title>

          <S.InfoBox>
            <InformationBox
              variant="fullSize"
              total="4"
              description="melhor sequência de pratos dentro da dieta"
            />

            <InformationBox
              variant="fullSize"
              total="4"
              description="refeições registradas"
            />

            <S.Wrapper>
              <InformationBox
                variant="halfSize"
                status="goodMeal"
                total="4"
                description="refeições dentro da dieta"
              />
              <InformationBox
                variant="halfSize"
                status="badMeal"
                total="4"
                description="refeições fora da dieta"
              />
            </S.Wrapper>
          </S.InfoBox>
        </S.Content>
      </S.Container>
    </>
  );
};

export default Statistics;
