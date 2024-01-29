import { useMemo } from "react";
import * as S from "./styles";
import { TInputBox } from "./types";

const InputBox: React.FC<TInputBox> = ({
  variant,
  title,
  onChangeText,
  value,
  halfSize,
}) => {
  const InputBoxVariants = useMemo(() => {
    const variants: Record<string, JSX.Element> = {
      text: (
        <>
          <S.Title>{title}</S.Title>
          <S.Input value={value} onChangeText={onChangeText} />
        </>
      ),
      textarea: (
        <>
          <S.Title>{title}</S.Title>
          <S.Input
            value={value}
            onChangeText={onChangeText}
            multiline
            numberOfLines={4}
            style={{
              padding: 14,
            }}
          />
        </>
      ),
    };
    return variants[variant];
  }, [variant, title, value, halfSize]);

  return (
    <S.Container
      style={{
        width: halfSize ? "48%" : "100%",
      }}
    >
      {InputBoxVariants}
    </S.Container>
  );
};

export default InputBox;
