import styled, { css } from 'styled-components';
import theme from '../../theme';

export const StyledTypographyComponent = styled.div`
  ${({ variant, color }) => css`
    font-family: 'Rubik', sans-serif; 
    color: ${theme?.[color] || 'black'};

    ${variant === 'h1' &&
    css`
      font-size: 4.8rem;
      font-weight: 700;
    `}

    ${variant === 'h2' &&
    css`
      font-size: 3.6rem;
      font-weight: 600;
    `}

    ${variant === 'h3' &&
    css`
      font-size: 2.8rem;
      font-weight: 500;
    `}

    ${variant === 'h4' &&
    css`
      font-size: 1.8rem;
      font-weight: 400;
    `}


    ${variant === 'h5' &&
    css`
      font-size: 1.4rem;
      font-weight: 300;
    `}

    ${variant === 'h6' &&
    css`
      font-size: 1rem;
      font-weight: 400;
    `}

    ${variant === 'p' &&
    css`
      font-size: 1.2rem;
    `}


  `}
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  flex-direction: column;
  gap:1rem;
  
`;
