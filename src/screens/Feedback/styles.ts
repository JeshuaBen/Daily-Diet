import styled, { css } from "styled-components/native";
import { TFeedbackScreen } from "./types";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 32px;
`;

export const TitleWrapper = styled.View`
  width: 100%;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.Text<TFeedbackScreen>`
  ${({ theme, status }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${status !== "badMeal"
      ? theme.COLORS.GREEN300
      : theme.COLORS.RED300};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY700};
  `}
`;

export const StrongDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY700};
  `}
`;

export const Image = styled.Image``;
