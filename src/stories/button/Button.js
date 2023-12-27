import React from 'react';
import {
  StyledButtonComponent,
  OutlineButtons,
  TextButtons,
} from './Button.style';

const Button = ({ color, type, text, icon }) => {
  if (type === 'contained') {
    return (
      <StyledButtonComponent color={color}>
        {icon} {text}
      </StyledButtonComponent>
    );
  }

  if (type === 'outlined') {
    return (
      <OutlineButtons color={color}>
        {icon} {text}
      </OutlineButtons>
    );
  }

  return <TextButtons color={color}>{text}</TextButtons>;
};

export default Button;
