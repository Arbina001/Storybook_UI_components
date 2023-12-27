import React from 'react';
import { FaSave } from 'react-icons/fa';
import Button from './Button';
import { StyledContainer } from './Button.style';

export default {
  title: 'Buttons',
  component: Button,
};

export const ListButton = () => (
  <StyledContainer>
    <Button color="primary" variant="contained" text="PRIMARY BUTTON" />
    <Button color="secondary" variant="contained" text="SECONDARY BUTTON" />
    <Button color="success" variant="contained" text="SUCCESS BUTTON" />
    <Button color="warning" variant="contained" text="WARNING BUTTON" />
  </StyledContainer>
);

export const OutlineButtons = () => (
  <StyledContainer>
    <Button color="primary" variant="outlined" text="PRIMARY BUTTON" />
    <Button color="secondary" variant="outlined" text="SECONDARY BUTTON" />
    <Button color="success" variant="outlined" text="SUCCESS BUTTON" />
    <Button color="warning" variant="outlined" text="WARNING BUTTON" />
  </StyledContainer>
);

export const IconButtons = () => (
  <StyledContainer>
    <Button
      color="primary"
      variant="outlined"
      text="save button"
      icon={<FaSave />}
    />
    <Button
      color="primary"
      variant="contained"
      text="save button"
      icon={<FaSave />}
    />
  </StyledContainer>
);

export const TextButtons = () => (
  <StyledContainer>
    <Button color="primary" variant="text" text="PIRMARY LINK BUTTON" />
    <Button color="secondary" variant="text" text="SECONDARY LINK BUTTON" />
    <Button color="success" variant="text" text="SUCCESS LINK BUTTON" />
    <Button color="warning" variant="text" text="WARNING LINK BUTTON" />
  </StyledContainer>
);
