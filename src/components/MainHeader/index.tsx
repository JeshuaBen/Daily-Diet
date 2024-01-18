import * as S from "./styles";

import logoImg from "@assets/logo.png";
import profileImg from "@assets/profileImage.jpeg";

const MainHeader: React.FC = () => {
  return (
    <S.Container>
      <S.Logo source={logoImg} />

      <S.ProfileImageContainer>
        <S.ProfileImage source={profileImg} />
      </S.ProfileImageContainer>
    </S.Container>
  );
};

export default MainHeader;
