import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  padding-top: 12px;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY300};
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 36px 24px 24px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY100};
`;
