import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
  padding-top: 12px;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY100};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 36px 24px 24px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY100};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const InfoBox = styled.View`
  width: 100%;
  flex-direction: column;
  gap: 12px;
  margin-top: 22px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  gap: 12px;
`;
