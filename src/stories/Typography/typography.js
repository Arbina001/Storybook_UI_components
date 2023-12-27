import React from 'react';
import { TextInput } from './Typography.style';

const Typography = ({ as, text, type }) => {
  return (
    <TextInput as={as} type={type}>
      {text}
    </TextInput>
  );
};

export default Typography;
