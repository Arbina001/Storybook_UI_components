
import React from "react";
import { StyledButtonComponent } from "./Buttons.style";
const Button = ({
  type,
  variant,
  text,
  icon,
  isOutline,
  border,
  disableHover,
  
}) => {
  return (
    <StyledButtonComponent
      type={type}
      variant={variant}
      isOutline={isOutline}
      border={border}
      disableHover={disableHover}
    >
      {icon} {text}
    </StyledButtonComponent>
  );
};


export default Button;