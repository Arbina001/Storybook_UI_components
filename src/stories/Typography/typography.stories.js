import React from 'react';
import Typography from './typography';
import { StyledContainer } from './typography.style';

export default {
  title: 'Typography',
  component: Typography,
};

export const Heading = () => (
  <StyledContainer>
    <Typography variant="h1" text="H1. Adorn Box heading" />
    <Typography variant="h2" text="H2. Adorn Box heading" />
    <Typography variant="h3" text="H3. Adorn Box heading" />
    <Typography variant="h4" text="H4. Adorn Box heading" />
    <Typography variant="h5" text="H5. Adorn Box heading" />
    <Typography variant="h6" text="H6. Adorn Box heading" />
  </StyledContainer>
);

export const FontColors = () => (
  <StyledContainer>
    <Typography variant="p" text="Adorn Box text with primary color" color="primary" />
    <Typography variant="p" text="Adorn Box text with primary color" color="primary" />
    <Typography variant="p" text="Adorn Box text with success color" color="success" />
    <Typography variant="p" text="Adorn Box text with danger color" color="danger" />
    <Typography variant="p" text="Adorn Box text with warning color" color="warning" />
  </StyledContainer>
);
