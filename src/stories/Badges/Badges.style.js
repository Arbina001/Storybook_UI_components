import styled, { css } from "styled-components";
import theme from "../../theme";

export const BadgesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;

export const Mainphoto = styled.div`    
  position: relative;
`;

export const AvatarImage = styled.img`
  ${({ size }) => css`
    height: ${size}rem; 
    border-radius: 50%;
  `}
`;

export const BadgeIcon = styled.div`
  position: absolute;
  bottom: 0;
  left: 52%;
  border-color: ${theme.white};
  top: 66%;
  transform: translateX(50%);
  width: 12px;
  height: 12px;
  background-color: ${({ colortype }) => theme?.[colortype]}; 
  border-radius: 50%;
  display: inline-block;
  border: 2px solid;
  border-color: white;
`; 

export const BadgeForIcon = styled(BadgeIcon)`
  background-color: ${({ colortype }) => theme?.[colortype]};
  left: 62%;
  top: 7%;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  color: white;
  font-size: 12px;
  text-align: center;
`;

export const IconImageBadge = styled(AvatarImage)`
  ${({ size }) => css`
    height: ${size}rem;
  `}
  border-radius: 0%;
`;

export const ImageContainer = styled.div`
  position: relative;
`;
