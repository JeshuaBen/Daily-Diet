import { Plus } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY100};
  padding: 32px 24px 24px 24px;
`;

export const ButtonWrapper = styled.View`
  margin: 36px 0px 24px 0px;
  gap: 8px;
`;

export const Meals = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const NewMeal = styled(TouchableOpacity)`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 16px;
  min-height: 54px;
  max-height: 54px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY600};
`;

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))``;

export const ButtonDescription = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const MealContainer = styled.View`
  width: 100%;
  align-items: flex-start;
  margin-bottom: 12px;
`;

export const Date = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY700};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  margin-bottom: 10px
`;
