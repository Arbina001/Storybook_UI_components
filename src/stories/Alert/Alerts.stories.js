import React from 'react';
import { AlertComponent } from './Alerts';
import { StyledContainer } from './Alerts.style';
export default {
  title: 'Alert',
  component: AlertComponent,
};

export const SimpleAlerts = () => (
  <div>
    <AlertComponent
      type="primary"
      variant="contained"
      text="Primary! This is a Primary Alert - Check it now!"
      disableHover
    />
    <AlertComponent
      type="secondary"
      variant="contained"
      text="Secondary! This is a Secondary Alert - Check it now!"
      disableHover
    />
    <AlertComponent
      type="success"
      variant="contained"
      text="Success! This is a Success Alert - Check it now!"
      disableHover
    />
    <AlertComponent
      type="warning"
      variant="contained"
      text="Warning! This is a Warning Alert - Check it now!"
      disableHover
    />
  </div>
);

export const OutlineAlerts = () => (
  <StyledContainer>
    <AlertComponent
      type="primary"
      variant="outline"
      text="Primary! This is a Primary Alert - Check it now!"
      isOutline
      disableHover
    />
    <AlertComponent
      type="textcolorgray"
      variant="outlined"
      text="Secondary! This is a Secondary Alert - Check it now!"
      isOutline
      disableHover
    />
    <AlertComponent
      type="success"
      variant="outlined"
      text="Success! This is a Success Alert - Check it now!"
      isOutline
      disableHover
    />
    <AlertComponent
      type="warning"
      variant="outlined"
      text="Primary! This is a Warning Alert - Check it now!"
      isOutline
      disableHover
    />
  </StyledContainer>
);
