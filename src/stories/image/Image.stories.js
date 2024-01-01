import React from 'react';
import { Image } from './Image';
import { StyledImageContainer } from './Image.styled';

export default {
  title: 'Images',
};

export const squareImage = () => (
  <StyledImageContainer>
    <Image
      url="https://picsum.photos/352/350/?blur"
      alt="squareImage"
      shape="square"
    />
    <Image
      url="https://picsum.photos/351/350/?blur"
      alt="squareImage"
      shape="square"
    />
  </StyledImageContainer>
);

export const CircleImage = () => (
  <StyledImageContainer>
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
  </StyledImageContainer>
);

export const MainImage = () => (
  <StyledImageContainer>
    <Image
      url="https://picsum.photos/359/350/?blur"
      alt="MainImage"
      shape="full"
    />
  </StyledImageContainer>
);
