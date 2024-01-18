import styled, { css } from "styled-components/native";
import { TStatusBox } from "./types";
import { ArrowUpRight } from "phosphor-react-native";

export const Container = styled.View<TStatusBox>`
  width: 100%;
  border-radius: 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 8px 16px 8px;
  margin-top: 40px;

  ${({ theme, status }) => css`
    background-color: ${status === "goodMeal"
      ? theme.COLORS.GREEN100
      : theme.COLORS.RED100};
  `}
`;

export const IconContainer = styled.View`
  width: 100%;
  align-items: flex-end;
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN300,
}))``;

export const TextWrapper = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE}px;
    color: ${theme.COLORS.GRAY700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    line-height: 35px;
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
