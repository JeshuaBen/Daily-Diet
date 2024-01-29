import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: column;

  gap: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD}
    color: ${theme.COLORS.GRAY600}
  `}
`;

export const Input = styled.TextInput`
  width: 100%;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY300};
  border-style: solid;
  border-radius: 6px;
  padding: 8px;
`;
