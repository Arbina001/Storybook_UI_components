import React from 'react';
import {
  StyledButtonComponent,
  OutlineButtons,
  TextButtons 
} from './Button.style';

const Button = ({ type, variant, text, icon }) => {
  if (variant === 'contained') {
    return (
      <StyledButtonComponent type={type}>
        {icon} {text}
      </StyledButtonComponent>
    );
  }

  if (variant === 'outlined') {
    return (
      <OutlineButtons type={type}>
        {icon} {text}
      </OutlineButtons>
    );
  }
  if (variant === 'text') {
    return <TextButtons type={type}>{text}</TextButtons>;
  }

  return null;
};

export default Button;
