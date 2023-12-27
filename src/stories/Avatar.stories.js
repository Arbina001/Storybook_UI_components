import React from "react";
import { Avatar } from "./Avatar";
import { StyledAvatarContainer } from "./Avatar.Styled";

export default {
  title: "Avatar",
  component: Avatar,
};

export const SquareProfile = () => (
  <StyledAvatarContainer>
    <Avatar url="https://i.pravatar.cc/40" Size={2.4} variant="square" />
    <Avatar url="https://i.pravatar.cc/60" Size={3.4} variant="square" />
    <Avatar url="https://i.pravatar.cc/80" Size={4.4} variant="square" />
  </StyledAvatarContainer>
);

export const CircularProfileAvatar = () => (
  <StyledAvatarContainer>
    <Avatar url="https://i.pravatar.cc/40" Size={2.4} variant="circle" />
    <Avatar url="https://i.pravatar.cc/60" Size={3.4} variant="circle" />
    <Avatar url="https://i.pravatar.cc/80" Size={4.4} variant="circle" />
  </StyledAvatarContainer>
);