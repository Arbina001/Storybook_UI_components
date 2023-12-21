import React from "react";
import {
  StyledButtonComponent,
  OutlineButtons,
  TextButtons
} from "./Buttons.style";


const Button = ({ type, variant, text, icon }) => {
  if (variant === "contained") {
    return (
      <StyledButtonComponent choosecolor={type}>
        {icon} {text}
      </StyledButtonComponent>
    );
  }


  if (variant === "outlined") {
    return (
      <OutlineButtons choosecolor={type}>
        {icon} {text}
      </OutlineButtons>
    );
  }
  if (variant === "TextButton") {
    return <TextButtons choosecolor={type}>{text}</TextButtons>;
  }


  return null;
};


export default Button;