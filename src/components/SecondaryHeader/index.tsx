import { useMemo } from "react";
import * as S from "./styles";
import { TSecondaryHeader } from "./types";
import { useTheme } from "styled-components/native";

const SecondaryHeader: React.FC<TSecondaryHeader> = ({
  variant,
  status,
  percentage,
  title,
  bgColor,
  onPress,
}) => {
  const { COLORS } = useTheme();

  const SecondaryHeaderVariants = useMemo(() => {
    const variants: Record<string, JSX.Element> = {
      primary: (
        <S.Content variant={variant} status={status}>
          <S.GoBackButton onPress={onPress}>
            <S.Icon
              color={status === "goodMeal" ? COLORS.GREEN300 : COLORS.RED300}
            />
          </S.GoBackButton>

          <S.TextWrapper>
            <S.Percentage>{percentage}</S.Percentage>
            <S.Description>das refeições dentro da dieta</S.Description>
          </S.TextWrapper>
        </S.Content>
      ),
      secondary: (
        <S.Content variant={variant} bgColor={bgColor}>
          <S.GoBackButton onPress={onPress}>
            <S.Icon color={COLORS.GRAY600} />
          </S.GoBackButton>
          <S.Wrapper>
            <S.PageTitle>{title}</S.PageTitle>
          </S.Wrapper>
        </S.Content>
      ),
    };

    return variants[variant];
  }, [variant, status, title, percentage]);

  return <S.Container>{SecondaryHeaderVariants}</S.Container>;
};

export default SecondaryHeader;
