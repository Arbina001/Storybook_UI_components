import styled, { css } from 'styled-components';
import theme from './theme';
export const StyledCommonCard = css`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 5px;
  border: 1px solid ${theme.whiteshaded};
  padding: 10px;
  background-color: ${theme.white}; 
`;

export const StyledTitle = styled.h2`
  color: ${theme.primary};
`;

export const Styledcontent = styled.p`
  color: ${theme.gray};
`;

export const StyledSimpleCard = styled.div`
  ${StyledCommonCard}
  max-width: 300px;
  display: block;
  border: 1px solid ${theme.whiteshaded};
  &:hover {
    box-shadow:10px #00000033;
  }
`;

export const StyledCardBadge = styled.div`
  ${StyledCommonCard}
  max-width: 300px;
  &:hover {
    box-shadow:10px #00000033;
  }
`;

export const StyledImage = styled.img`
  border-radius: 3px;
`;

export const StyledBadge = styled.div`
  position: absolute;
  color: ${theme.white};
  font-weight: 400;
  font-size: 13px;
  padding: 10px;
  top: 30px;
  left: 16px;
  background-color: ${theme.primary};
`;

export const StyledDissmiss = styled.div`
  position: absolute;
  font-weight: 400;
  font-size: 13px;
  top: 30px;
  left: 280px;
  background-color: ${theme.primary}; 
  padding:10px;
  border: 1px solid ${theme.whiteshaded};
  color: ${theme.white};
  &:hover {
    box-shadow:10px #00000033;
  }
`;

export const StyledOverLay = styled.div`
  position: absolute;
  top: 105px;
  left: 115px;
  text-align: center;
  color: ${theme.white};
  font-weight: 600;
  font-family:'Gill Sans';
  font-size: 17px;
  border: 1px solid ${theme.whiteshaded};
  padding: 0.5rem 1rem;
`;

export const StyledHorizontalCard = styled.div`
  display: flex;
  width: 100%;
  max-width: 50rem;
  gap: 10px;
  background-color: ${theme.white};
  border-radius: 10px;
  font-size: 13px;
  border: 1px solid ${theme.whiteshaded};
  height: auto;
  padding: 10px;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledHoriZontalImage = styled.img`
  border-radius: 2px;
  font-size: 11px;
  width: 100%;
  max-width: 100px;
  height: 100%;
  max-height: 50px; 
`;
