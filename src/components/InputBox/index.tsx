import { useMemo } from "react";
import * as S from "./styles";
import { TInputBox } from "./types";

const InputBox: React.FC<TInputBox> = ({ variant }) => {
  const InputBoxVariants = useMemo(() => {
    const variants: Record<string, JSX.Element> = {};
    return variants[variant];
  }, []);

  return <S.Container>{InputBoxVariants}</S.Container>;
};

export default InputBox;
