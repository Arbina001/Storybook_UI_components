
import styled, { css } from "styled-components";
import theme from "../../theme";


export const StyledButtonComponent = styled.button`
  text-transform: uppercase;
  border: 2px solid ${theme.white};
  font-style:italic;


  font-size: 1rem;
  font-weight: 600;
  background-color: ${({ typecolor }) =>
    typecolor === "secondary" ? theme.basiccolor : theme?.[typecolor]};


  color: ${({ typecolor }) =>
    typecolor === "secondary" ? theme?.[typecolor] : theme.basiccolor};


  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;


export const OutlineButtons = styled(StyledButtonComponent)`
  border: 2px solid ${({ typecolor }) => theme?.[typecolor]};
  background-color: ${theme.basiccolor};
  color: ${({ typecolor }) => theme?.[typecolor]};
  &:hover,
  &:active {
    background-color: ${({ typecolor }) => theme?.[typecolor]};
    color: ${theme.basiccolor};
  }
`;
export const TextButtons = styled(StyledButtonComponent)`
  color: ${({ typecolor }) => theme?.[typecolor]};
  border: 2px solid transparent;
  background-color: transparent;
`;


export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;