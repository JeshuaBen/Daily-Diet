import styled, { css } from "styled-components/native";
import { TInformationBox } from "./types";

export const Container = styled.View<TInformationBox>`
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 8px;
  gap: 8px;
  ${({ variant, theme }) =>
    variant === "fullSize" &&
    css`
      width: 100%;
      background-color: ${theme.COLORS.GRAY200};
    `}

  ${({ variant, status, theme }) =>
    variant === "halfSize" &&
    status === "goodMeal" &&
    css`
      width: 48%;
      background-color: ${theme.COLORS.GREEN100};
    `}

    ${({ variant, status, theme }) =>
    variant === "halfSize" &&
    status === "badMeal" &&
    css`
      width: 48%;
      background-color: ${theme.COLORS.RED100};
    `}
`;

export const Total = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY700};
    text-align: center;
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    text-align: center;
  `}
`;
