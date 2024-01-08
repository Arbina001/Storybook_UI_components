import React from 'react';
import {
  Styledcontent,
  StyledImage,
  StyledTitle,
  StyledBadge,
  StyledDissmiss,
  StyledOverLay,
  StyledContainer,
} from './Cards.styled';
import Button from '../button/Button';
const Cards = ({
  title,
  content,
  alt,
  imageSrc,
  badge,
  dlt,
  button,
  cardoverlayText,
}) => {
  return (
    <>
      <StyledContainer>
        {badge && <StyledBadge>{badge}</StyledBadge>}
        {dlt && <StyledDissmiss>{dlt}</StyledDissmiss>}
        {imageSrc && <StyledImage src={imageSrc} alt={alt}></StyledImage>}
        <StyledTitle>{title}</StyledTitle>
        <Styledcontent>{content}</Styledcontent>
        {button && <Button color="primary" type="outlined" text={button} />}
        {cardoverlayText && <StyledOverLay>{cardoverlayText}</StyledOverLay>}
      </StyledContainer>
    </>
  );
};
export default Cards;
