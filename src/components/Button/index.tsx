import { useMemo } from "react";
import * as S from "./styles";
import { TButton } from "./types";

const Button: React.FC<TButton> = ({
  variant,
  title,
  hasIcon,
  Icon,
  onPress,
}) => {
  const ButtonVariants = useMemo(() => {
    const variants: Record<string, JSX.Element> = {
      primary: (
        <S.RegisterMeal variant={variant} onPress={onPress}>
          {hasIcon && Icon}
          <S.ButtonDescription variant={variant}>{title}</S.ButtonDescription>
        </S.RegisterMeal>
      ),
      secondary: (
        <S.RegisterMeal variant={variant} onPress={onPress}>
          {hasIcon && Icon}
          <S.ButtonDescription variant={variant}>{title}</S.ButtonDescription>
        </S.RegisterMeal>
      ),
    };
    return variants[variant];
  }, [variant, title, Icon]);

  return <>{ButtonVariants}</>;
};

export default Button;
