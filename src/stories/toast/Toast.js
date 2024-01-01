import React from 'react';
import { StyledToast } from './Toast.styled';

export const Toast = ({ type, text }) => {
  return <StyledToast type={type}>{text}</StyledToast>;
};
