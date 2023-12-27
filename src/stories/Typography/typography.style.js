import styled, { css } from 'styled-components';
import theme from '../../theme';
import size from '../size';

const baseStyles = css`
  color: ${({ type }) => theme?.[type]};
  font-weight: bold;
  font-family: sans-serif;
`;

export const TextInput = styled.div`
  ${baseStyles}
  font-size: ${({ as }) => size?.[as]?.fontSize};
  line-height: ${({ as }) => size?.[as]?.lineHeight};
  font-weight: ${({ as }) => size?.[as]?.fontWeight};
`;

export const TextContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
`;
