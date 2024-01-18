import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.Image``;

export const ProfileImageContainer = styled.View`
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.COLORS.GRAY600};
  border-radius: 999px;
`;

export const ProfileImage = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 999px;
`;
