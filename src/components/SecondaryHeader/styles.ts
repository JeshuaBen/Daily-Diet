import styled, { css } from "styled-components/native";
import { TSecondaryHeader } from "./types";
import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  width: 100%;
`;

export const Content = styled.View<TSecondaryHeader>`
  width: 100%;
  align-items: flex-start;
  padding: 24px 32px 32px 24px;

  ${({ theme, status, variant }) =>
    status === "goodMeal" &&
    variant === "primary" &&
    css`
      background-color: ${theme.COLORS.GREEN100};
    `}

  ${({ theme, status, variant }) =>
    status === "badMeal" &&
    variant === "primary" &&
    css`
      background-color: ${theme.COLORS.RED100};
    `}

    ${({ variant, bgColor }) =>
    variant === "secondary" &&
    css`
      background-color: ${bgColor};
      flex-direction: row;
      align-items: center;
      justify-content: center;
    `}
`;

export const Wrapper = styled.View`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const GoBackButton = styled(TouchableOpacity)``;

export const Icon = styled(ArrowLeft).attrs(() => ({
  size: 24,
}))``;

export const TextWrapper = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`;

export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE}px;
    font-family: ${theme.FONT_FAMILY.BOLD}
    color: ${theme.COLORS.GRAY700}
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const PageTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD}
    color: ${theme.COLORS.GRAY700}
  `}
`;
