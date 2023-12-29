import styled from 'styled-components';

export const ImageContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const ImageStyle = styled.img`
  height: 9.3rem;
`;
export const CircleImage = styled(ImageStyle)`
  border-radius: 50%;
`;

export const MainImage = styled(ImageStyle)`
  height: auto;
  width: 100%;
`;
