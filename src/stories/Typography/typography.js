import React from 'react';
import { TextInput } from './Typography.style';

const Typography = ({ headingTag, text, type }) => {
  return (
    <TextInput as={headingTag} type={type}>
      {text}
    </TextInput>
  );
};

export default Typography;
