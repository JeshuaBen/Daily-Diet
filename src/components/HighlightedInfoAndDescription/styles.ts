import styled, { css } from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: column;
  gap: 6px;
`;

export const HighlightedInfo = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
