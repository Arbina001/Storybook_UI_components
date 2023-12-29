
import React from 'react';
import Typography from './typography';
import { StyledTextContainer } from './Typography.styled';

export default {
  title: 'Typography',
};

export const HeadingTypography = () => (
  <StyledTextContainer>
    <Typography as="h1" text="H1. Adorn Box heading" />
    <Typography as="h2" text="H2. Adorn Box heading" />
    <Typography as="h3" text="H3. Adorn Box heading" />
    <Typography as="h4" text="H4. Adorn Box heading" />
    <Typography as="h5" text="H5. Adorn Box heading" />
    <Typography as="h6" text="H6. Adorn Box heading" />
  </StyledTextContainer>
);

export const FontColors = () => (
  <StyledTextContainer>
    <Typography
      as="p"
      text="Adorn Box text with primary color"
      type="primary"
    />
    <Typography
      as="p"
      text="Adorn Box text with primary color"
      type="primary"
    />
    <Typography
      as="p"
      text="Adorn Box text with success color"
      type="success"
    />
    <Typography as="p" text="Adorn Box text with danger color" type="danger" />
    <Typography
      as="p"
      text="Adorn Box text with warning color"
      type="warning"
    />
  </StyledTextContainer>
);
