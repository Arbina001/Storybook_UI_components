import React from "react";
import {Mainphoto} from './Avatar.Styled';

export const Avatar = ({ url, Size, variant }) => {
  return <Mainphoto src={url} Size={Size} shape={variant} />;
};