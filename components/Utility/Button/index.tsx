import React from "react";
import { ButtonContainer, ButtonIcon, ButtonText } from "./Button.styles";

interface ButtonProps {
  color: string;
  backgroundColor: string;
  icon?: any;
  handleClick: () => void;
  children: React.ReactNode;
  outline: boolean;
}

const Button: React.FC<ButtonProps> = ({
  color,
  backgroundColor,
  icon: Icon,
  handleClick,
  children,
  outline,
}) => {
  return (
    <ButtonContainer
      color={color}
      backgroundColor={backgroundColor}
      outline={outline}
      onClick={handleClick}
    >
      <ButtonText>{children}</ButtonText>
      {Icon && <ButtonIcon as={Icon} />}
    </ButtonContainer>
  );
};

export default Button;
