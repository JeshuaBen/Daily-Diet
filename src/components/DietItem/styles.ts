import styled, { css } from "styled-components/native";
import { TDietItem } from "./types";

export const Content = styled.View`
  width: 100%;
  flex-direction: column;
`;

export const ItemContainer = styled.View`
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY300};
  border-radius: 6px;
  padding: 14px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 8px;
`;

export const TimeAndProductWrapper = styled.View`
  flex-direction: row;
  gap: 8px;
  justify-content: center;
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.X_SM}px;
    color: ${theme.COLORS.GRAY700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-top: 3px
`;

export const Separator = styled.View`
  border-left-width: 1px;
  border-left-style: solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY400};
`;

export const Product = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Status = styled.View<TDietItem>`
  width: 14px;
  height: 14px;
  border-radius: 999px;

  background-color: ${({ theme, status }) =>
    status === "goodMeal" ? theme.COLORS.GREEN200 : theme.COLORS.RED200};
`;
