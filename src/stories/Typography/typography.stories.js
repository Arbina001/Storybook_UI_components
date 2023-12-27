import React from 'react';
import Typography from './Typography';
import { TextContainer} from './Typography.style';

export default {
  title: 'Typography',
}; 

export const HeadingTypography = () => (
  <TextContainer>
    <Typography htmlTag="h1" text="H1. Adorn Box heading" />
    <Typography htmlTag="h2" text="H2. Adorn Box heading" />
    <Typography htmlTag="h3" text="H3. Adorn Box heading" />
    <Typography htmlTag="h4" text="H4. Adorn Box heading" />
    <Typography htmlTag="h5" text="H5. Adorn Box heading" />
    <Typography htmlTag="h6" text="H6. Adorn Box heading" />
  </TextContainer>
);

export const FontColors = () => (
  <TextContainer>
    <Typography
      htmlTag="p"
      text="Adorn Box text with primary color"
      type="primary"
    />
    <Typography
      htmlTag="p"
      text="Adorn Box text with primary color"
      type="primary"
    />
    <Typography
      htmlTag="p"
      text="Adorn Box text with success color"
      type="success"
    />
    <Typography
      htmlTag="p"
      text="Adorn Box text with danger color"
      type="danger"
    />
    <Typography
      htmlTag="p"
      text="Adorn Box text with warning color"
      type="warning"
    />
  </TextContainer>
);
