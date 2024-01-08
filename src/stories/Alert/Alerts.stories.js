import React from 'react';
import { AlertComponent } from './Alerts';
import { AlertContainer } from './Alerts.style';

export default {
  heading: 'Alert',
  component: AlertComponent,
};

export const ContainedAlert = () => (
  <AlertContainer>
    <AlertComponent
      type="primary"
      variant="contained"
      text="Primary! This is a Primary Alert - Check it now!"
    />
    <AlertComponent
      type="secondary"
      variant="contained"
      text="Secondary! This is a Primary Alert - Check it now!"
    />
    <AlertComponent
      type="success"
      variant="contained"
      text="Success! This is a Primary Alert - Check it now!"
    />
    <AlertComponent
      type="warning"
      variant="contained"
      text="Warning! This is a Primary Alert - Check it now!"
    />
  </AlertContainer>
);

export const OutlineAlert = () => (
  <AlertContainer>
    <AlertComponent
      type="primary"
      variant="outline"
      isOutline
      text="Primary! This is a Primary Alert - Check it now!"
    />
    <AlertComponent
      type="secondary"
      variant="outline"
      isOutline
      text="Secondary! This is a Primary Alert - Check it now!"
    />
    <AlertComponent
      type="success"
      variant="outline"
      isOutline
      text="Success! This is a Primary Alert - Check it now!"
    />
    <AlertComponent
      type="warning"
      variant="outline"
      isOutline
      text="Warning! This is a Primary Alert - Check it now!"
    />
  </AlertContainer>
);
