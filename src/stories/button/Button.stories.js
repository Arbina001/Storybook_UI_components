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
    <Button color="primary" type="contained" text="PRIMARY BUTTON" />
    <Button color="secondary" type="contained" text="SECONDARY BUTTON" />
    <Button color="success" type="contained" text="SUCCESS BUTTON" />
    <Button color="warning" type="contained" text="WARNING BUTTON" />
  </StyledContainer>
);

export const OutlineButtons = () => (
  <StyledContainer>
    <Button color="primary" type="outlined" text="PRIMARY BUTTON" />
    <Button color="secondary" type="outlined" text="SECONDARY BUTTON" />
    <Button color="success" type="outlined" text="SUCCESS BUTTON" />
    <Button color="warning" type="outlined" text="WARNING BUTTON" />
  </StyledContainer>
);

export const IconButtons = () => (
  <StyledContainer>
    <Button
      color="primary"
      type="outlined"
      text="save button"
      icon={<FaSave />}
    />
    <Button
      color="primary"
      type="contained"
      text="save button"
      icon={<FaSave />}
    />
  </StyledContainer>
);

export const TextButtons = () => (
  <StyledContainer>
    <Button color="primary" text="PIRMARY LINK BUTTON" />
    <Button color="secondary" text="SECONDARY LINK BUTTON" />
    <Button color="success" text="SUCCESS LINK BUTTON" />
    <Button color="warning" text="WARNING LINK BUTTON" />
  </StyledContainer>
);
