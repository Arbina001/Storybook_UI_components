import React from 'react';
import { StyledTextInput } from './Typography.styled';

const Typography = ({ as, text, type }) => {
  return (
    <StyledTextInput as={as} type={type}>
      {text}
    </StyledTextInput>
  );
};

export default Typography;