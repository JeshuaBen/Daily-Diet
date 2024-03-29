import { Alert } from "react-native";
import * as S from "./styles";
import { useTheme } from "styled-components/native";
import { StatusBar } from "expo-status-bar";

import { useNavigation } from "@react-navigation/native";

import SecondaryHeader from "@components/SecondaryHeader";
import Button from "@components/Button";
import HighlightedInfoAndDescription from "@components/HighlightedInfoAndDescription";
import StatusTag from "@components/StatusTag";
import { useState } from "react";
import DeleteMealModal from "@components/DeleteMealModal";

const MealDetails: React.FC = () => {
  const [showRemoveMealModal, setShowRemoveMealModal] =
    useState<boolean>(false);

  const { COLORS, FONT_SIZE } = useTheme();
  const navigation = useNavigation();

  const handleShowRemoveModal = () => {
    setShowRemoveMealModal(true);
  };

  console.log(showRemoveMealModal);

  return (
    <>
      <StatusBar backgroundColor={COLORS.GREEN100} translucent />
      <S.Container
        style={{
          backgroundColor: COLORS.GREEN100,
        }}
      >
        <SecondaryHeader
          variant="secondary"
          status="goodMeal"
          title="Refeição"
          bgColor={COLORS.GREEN100}
          onPress={() => navigation.goBack()}
        />

        <S.Content>
          <S.DetailsContainer>
            <HighlightedInfoAndDescription
              title="Sanduíche"
              description="Sanduíche de pão integral com atum e salada de alface e tomate"
              sizeOfTitle={FONT_SIZE.XL}
              sizeOfDescription={FONT_SIZE.MD}
            />

            <HighlightedInfoAndDescription
              title="Data e hora"
              description="12/08/2022 às 16:00"
              sizeOfTitle={FONT_SIZE.SM}
              sizeOfDescription={FONT_SIZE.MD}
            />

            <StatusTag status="goodMeal" title="Dentro da dieta" />
          </S.DetailsContainer>

          <S.ButtonWrapper>
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
              onPress={handleShowRemoveModal}
            />
          </S.ButtonWrapper>
        </S.Content>
      </S.Container>

      {showRemoveMealModal && (
        <DeleteMealModal
          onCancel={() => setShowRemoveMealModal(false)}
          onConfirm={() => Alert.alert("Excluído com sucesso")}
          visible={showRemoveMealModal}
        />
      )}
    </>
  );
};

export default MealDetails;
