import React from 'react';
import { ToastStyled } from './Toast.styled';

export const Toast = ({ type, text }) => {
  return <ToastStyled type={type}>{text}</ToastStyled>;
};