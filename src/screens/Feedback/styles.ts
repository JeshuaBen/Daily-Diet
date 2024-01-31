import styled, { css } from "styled-components/native";

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
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.X_LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    text-align: center;
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY700};
    text-align: center;
  `}
`;

export const StrongDescription = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY700};
  `}
`;

export const ImageWrapper = styled.View`
  width: 60%;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Image = styled.Image``;
