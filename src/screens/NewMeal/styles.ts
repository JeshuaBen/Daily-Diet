import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled.SafeAreaView`
  padding-top: 16px;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY300};
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 36px 24px 24px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY100};
  gap: 20px;
`;

export const DateTimeWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 12px;
`;

export const ButtonWrapper = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-end;
`;

export const ButtonContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD}
    color: ${theme.COLORS.GRAY600}
  `}
`;

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 8px;
`;
