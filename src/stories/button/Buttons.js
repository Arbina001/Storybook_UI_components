import React from "react";
import {
  StyledButtonComponent,
  OutlineButtons,
  TextButtons
} from "./Buttons.style";


const Button = ({ type, variant, text, icon }) => {
  if (variant === "contained") {
    return (
      <StyledButtonComponent typecolor={type}>
        {icon} {text}
      </StyledButtonComponent>
    );
  }


  if (variant === "outlined") {
    return (
      <OutlineButtons typecolor={type}>
        {icon} {text}
      </OutlineButtons>
    );
  }
  if (variant === "TextButton") {
    return <TextButtons typecolor={type}>{text}</TextButtons>;
  }


  return null;
};


export default Button;