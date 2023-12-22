import styled, { css } from 'styled-components';
import theme from '../../theme';

export const StyledButtonComponent = styled.button`
  text-transform: uppercase;
  border: 2px solid ${theme.white};
  font-style: italic;

  font-size: 1rem;
  font-weight: 600;
  background-color: ${({ type }) =>
    type === 'secondary' ? theme.basiccolor : theme?.[type]};

  color: ${({ type }) =>
    type === 'secondary' ? theme?.[type] : theme.basiccolor};

  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;

export const OutlineButtons = styled(StyledButtonComponent)`
  border: 2px solid ${({ type }) => theme?.[type]};
  background-color: ${theme.basiccolor};
  color: ${({ type }) => theme?.[type]};
  &:hover,
  &:active {
    background-color: ${({ type }) => theme?.[type]};
    color: ${theme.basiccolor};
  }
`;
export const TextButtons = styled(StyledButtonComponent)`
  color: ${({ type }) => theme?.[type]};
  border: 2px solid transparent;
  background-color: transparent;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
