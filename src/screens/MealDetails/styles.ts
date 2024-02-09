import { PencilSimpleLine, Trash } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: 16px;
  position: relative;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 36px 24px 24px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY100};
  gap: 20px;
`;

export const DetailsContainer = styled.View`
  flex: 1;

  gap: 24px;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  flex-direction: column;
  gap: 8px;
`;

export const EditIcon = styled(PencilSimpleLine).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))``;

export const TrashIcon = styled(Trash).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.GRAY700,
}))``;
