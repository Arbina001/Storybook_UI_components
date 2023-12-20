import styled, { css } from 'styled-components';
import theme from '../../theme';

export const AlertStyle = styled.button`
  font-size: 1.4;
  font-weight: 600;
  border: 2px solid;
  width: 100%;
  gap: 1rem;
  ${({ type, isOutline, border }) => css`
    background-color: ${isOutline ? 'transparent' : theme?.[type]};
    color: ${isOutline ? theme?.[type] : 'white'};
    border-color: ${border || '1px solid'};
    font-style: italic;
  `}
  padding: 10px 20px;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  ${({ type, isOutline, disableHover }) => css`
    background-color: ${isOutline ? 'transparent' : theme?.[type]};
    color: ${isOutline ? theme?.[type] : 'white'};
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
