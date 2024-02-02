import { Circle } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY200};
  width: 50%;
  border-radius: 1000px;
`;

export const Icon = styled(Circle).attrs(() => ({
  size: 8,
  weight: "fill",
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
