import styled, { css } from 'styled-components';
import theme from '../../theme';

export const StyledButtonComponent = styled.button`
  text-transform: uppercase;
  font-size: 1.4;
  font-weight: 600;
  border: 2px solid;

  ${({ type, isOutline, border }) => css`
    background-color: ${isOutline ? 'transparent' : theme?.[type]};
    color: ${isOutline ? theme?.[type] : theme.white};
    border: ${border || '1px solid'};
  `}

  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  ${({ type, isOutline, disableHover }) => css`
    background-color: ${isOutline ? 'transparent' : theme?.[type]};
    color: ${isOutline ? theme?.[type] : theme.white};

    ${!disableHover &&
    css`
      &:hover,
      &:active {
        background-color: ${isOutline ? theme?.[type] : theme?.[type]};
        color: white;
      }
    `}
  `}
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
