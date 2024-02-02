import styled, { css } from "styled-components/native";

import { TouchableOpacity } from "react-native";
import { TButton } from "./types";

export const RegisterMeal = styled(TouchableOpacity)<TButton>`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 16px;
  min-height: 54px;
  max-height: 54px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY600};

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background-color: ${({ theme }) => theme.COLORS.GRAY100};
      border-width: 1px;
      border-style: solid;
      border-color: ${({ theme }) => theme.COLORS.GRAY700};
      border-radius: 8px;
    `}
`;

export const ButtonDescription = styled.Text<TButton>`
  ${({ theme, variant }) =>
    variant === "primary" &&
    css`
      color: ${theme.COLORS.WHITE};
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE.SM}px;
    `}

  ${({ theme, variant }) =>
    variant === "secondary" &&
    css`
      color: ${theme.COLORS.GRAY700};
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE.SM}px;
    `}
`;
