import SecondaryHeader from "@components/SecondaryHeader";
import * as S from "./styles";
import { useTheme } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import Button from "@components/Button";

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

        <S.Content>
          <Button
            variant="primary"
            hasIcon
            Icon={<S.EditIcon />}
            title="Editar refeição"
          />
          <Button
            variant="secondary"
            hasIcon
            Icon={<S.TrashIcon />}
            title="Excluir refeição"
          />
        </S.Content>
      </S.Container>
    </>
  );
};

export default MealDetails;
