import React from 'react';
import { Image } from './Image';
import { ImageContainer } from './Image.styled';

export default {
  title: 'Images',
};

export const SquareImage = () => (
  <ImageContainer>
    <Image
      url="https://picsum.photos/352/350/?blur"
      alt="squareImage"
      shape="Square"
    />
    <Image
      url="https://picsum.photos/351/350/?blur"
      alt="squareImage"
      shape="Square"
    />
  </ImageContainer>
);

export const CircleImage = () => (
  <ImageContainer>
    <Image
      url="https://picsum.photos/355/350/?blur"
      alt="circleImage"
      shape="circle"
    />
    <Image
      url="https://picsum.photos/357/350/?blur"
      alt="circleImage"
      shape="circle"
    />
  </ImageContainer>
);

export const MainImage = () => (
  <ImageContainer>
    <Image
      url="https://picsum.photos/359/350/?blur"
      alt="MainImage"
      shape="full"
    />
  </ImageContainer>
);
