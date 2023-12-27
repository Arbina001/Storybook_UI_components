import React from 'react';
import { AvatarImage } from './Avatar.Styled';

export const Avatar = ({ url, Size, variant }) => {
  return <AvatarImage src={url} Size={Size} shape={variant} />;
};
