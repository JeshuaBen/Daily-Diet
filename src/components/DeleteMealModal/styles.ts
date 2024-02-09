import styled, { css } from "styled-components/native";

export const ModalContainer = styled.View`
  position: absolute;
  z-index: 5;
  top: 50%;
  bottom: 50%;

  width: 300px;
  border-radius: 8px;
  padding: 32px;

  background-color: ${({ theme }) => theme.COLORS.GRAY100};
`;

export const Info = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY600};
  `}
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;
