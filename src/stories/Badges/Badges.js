import React from 'react';
import {
  Mainphoto,
  AvatarImage,
  BadgeIcon,
  BadgeForIcon,
  IconImageBadge,
  ImageContainer,
} from '../../stories/Badges/Badges.style';

const Badge = ({ url, size, variant, colortype, text }) => {
  if (variant === 'square') {
    return (
      <Mainphoto>
        <AvatarImage size={size} src={url} alt="avatar new" />
        <BadgeIcon colortype={colortype} />
      </Mainphoto>
    );
  }
  if (variant === 'iconBadge') {
    return (
      <ImageContainer>
        <IconImageBadge size={size} src={url} alt="avatar" />
        <BadgeForIcon colortype={colortype}>{text}</BadgeForIcon>
      </ImageContainer>
    );
  }

  return null;
};

export default Badge;
