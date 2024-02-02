import * as S from "./styles";
import { THighlightedInfoAndDescription } from "./types";

const HighlightedInfoAndDescription: React.FC<
  THighlightedInfoAndDescription
> = ({ title, description, sizeOfTitle, sizeOfDescription }) => {
  return (
    <S.Wrapper>
      <S.HighlightedInfo
        style={{
          fontSize: sizeOfTitle,
        }}
      >
        {title}
      </S.HighlightedInfo>
      <S.Description
        style={{
          fontSize: sizeOfDescription,
        }}
      >
        {description}
      </S.Description>
    </S.Wrapper>
  );
};

export default HighlightedInfoAndDescription;
