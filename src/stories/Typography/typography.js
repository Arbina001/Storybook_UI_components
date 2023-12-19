import React from "react";
import { StyledTypographyComponent } from "./typography.style";

const Typography = ({ variant, text, color }) => {
  return (
    <StyledTypographyComponent variant={variant} color={color}>
      {text}
    </StyledTypographyComponent>
  );
};

export default Typography;
