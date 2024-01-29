import { Circle } from "phosphor-react-native";
import styled, { css } from "styled-components/native";
import { TMealStatus } from "./types";
import { TouchableOpacity } from "react-native";

export const Content = styled(TouchableOpacity)<TMealStatus>`
  background-color: ${({ theme }) => theme.COLORS.GRAY200};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 48%;
  gap: 8px;
  padding: 16px;

  ${({ theme, isSelected, variant }) =>
    isSelected === "goodMeal" &&
    variant === "goodMeal" &&
    css`
      background-color: ${theme.COLORS.GREEN100};
      border-color: ${theme.COLORS.GREEN300};
      border-width: 1px;
      border-style: solid;
      border-radius: 6px;
    `}

  ${({ theme, isSelected, variant }) =>
    isSelected === "badMeal" &&
    variant === "badMeal" &&
    css`
      background-color: ${theme.COLORS.RED100};
      border-color: ${theme.COLORS.RED300};
      border-width: 1px;
      border-style: solid;
      border-radius: 6px;
    `}
`;

export const Icon = styled(Circle).attrs(() => ({
  size: 8,
  weight: "fill",
}))``;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY700};
  `}
`;
