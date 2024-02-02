import { Pen } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: 16px;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 36px 24px 24px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY100};
  gap: 20px;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  flex-direction: column;
  gap: 8px;
`;

export const EditIcon = styled(Pen).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))``;

export const TrashIcon = styled(Pen).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.GRAY700,
}))``;
