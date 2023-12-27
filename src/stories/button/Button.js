import React from 'react';
import {
  StyledButtonComponent,
  OutlineButtons,
  TextButtons,
} from './Button.style';

const Button = ({ color, variant, text, icon }) => {
  if (variant === 'contained') {
    return (
      <StyledButtonComponent color={color}>
        {icon} {text}
      </StyledButtonComponent>
    );
  }

  if (variant === 'outlined') {
    return (
      <OutlineButtons color={color}>
        {icon} {text}
      </OutlineButtons>
    );
  }
  if (variant === 'text') {
    return <TextButtons color={color}>{text}</TextButtons>;
  }

  return null;
};

export default Button;
