import React from 'react';
import { ImageStyle, CircleImage, MainImage } from './Image.styled';

export const Image = ({ url, alt, shape }) => {
  if (shape === 'square') {
    return <ImageStyle src={url} alt={alt}></ImageStyle>;
  }

  if (shape === 'circle') {
    return <CircleImage src={url} alt={alt}></CircleImage>;
  }

  if (shape === 'full') {
    return <MainImage src={url} alt={alt}></MainImage>;
  }
};
