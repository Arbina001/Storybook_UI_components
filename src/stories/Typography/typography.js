import React from 'react';
import { TextInput } from './Typography.style';

 const Typography = ({ htmlTag, text, type }) => {
  return (
    <TextInput as={htmlTag} type={type}>
      {text}
    </TextInput>
  );
};

export default Typography;
