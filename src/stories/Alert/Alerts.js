import React from 'react';
import { AlertStyle } from './Alerts.style';

export const AlertComponent = ({
  type,
  variant,
  text,
  icon,
  isOutline,
  border,
  disableHover,
}) => {
  return (
    <AlertStyle
      type={type}
      variant={variant}
      isOutline={isOutline}
      border={border}
      disableHover={disableHover}
    >
      {text}{' '}
    </AlertStyle>
  );
};

