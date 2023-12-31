import styled, { css } from 'styled-components';

export const StyledAvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;

export const AvatarImage = styled.img`
  ${({ Size }) => css`
    height: ${Size}rem;
  `};
  ${({ shape }) => css`
    border-radius: ${shape === 'circle' ? '50%' : '20%'};
  `}
`;
