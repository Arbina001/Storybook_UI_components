import React from 'react';
import Typography from './Typography';
import { TextContainer } from './Typography.style';

export default {
  title: 'Typography',
  component: Typography,
};

export const HeadingTypography = () => (
  <TextContainer>
    <Typography headingTag="h1" text="H1. Adorn Box heading" />
    <Typography headingTag="h2" text="H2. Adorn Box heading" />
    <Typography headingTag="h3" text="H3. Adorn Box heading" />
    <Typography headingTag="h4" text="H4. Adorn Box heading" />
    <Typography headingTag="h5" text="H5. Adorn Box heading" />
    <Typography headingTag="h6" text="H6. Adorn Box heading" />
  </TextContainer>
);

export const FontColors = () => (
  <TextContainer>
    <Typography
      headingTag="p"
      text="Adorn Box text with primary color"
      type="primary"
    />
    <Typography
      headingTag="p"
      text="Adorn Box text with primary color"
      type="primary"
    />
    <Typography
      headingTag="p"
      text="Adorn Box text with success color"
      type="success"
    />
    <Typography
      headingTag="p"
      text="Adorn Box text with danger color"
      type="danger"
    />
    <Typography
      headingTag="p"
      text="Adorn Box text with warning color"
      type="warning"
    />
  </TextContainer>
);
