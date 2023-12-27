import styled, { css } from 'styled-components';
import theme from '../../theme';

export const StyledButtonComponent = styled.button`
  text-transform: uppercase;
  border: 2px solid ${theme.white};
  font-style: italic;

  font-size: 1rem;
  font-weight: 600;
  background-color: ${({ color }) =>
    color === 'secondary' ? theme.whitecolor : theme?.[color]};

  color: ${({ color }) =>
    color === 'secondary' ? theme?.[color] : theme.whitecolor};

  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;

export const OutlineButtons = styled(StyledButtonComponent)`
  border: 2px solid ${({ color }) => theme?.[color]};
  background-color: ${theme.whitecolor};
  color: ${({ color }) => theme?.[color]};
  &:hover,
  &:active {
    background-color: ${({ color }) => theme?.[color]};
    color: ${theme.whitecolor};
  }
`;
export const TextButtons = styled(StyledButtonComponent)`
  color: ${({ color }) => theme?.[color]};
  border: 2px solid transparent;
  background-color: transparent;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
