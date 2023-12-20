import styled, { css } from "styled-components";

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;

export const Mainphoto = styled.img`
  ${({ Size }) => css`
    height: ${Size}rem;
  `};
  ${({ shape }) => css`
    border-radius: ${shape === "circle" ? "50%" : "20%"};
  `}
`;