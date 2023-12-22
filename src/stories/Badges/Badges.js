import React from "react";
import { Mainphoto, AvatarImage, BadgeIcon,BadgeForIcon,IconImageBadge,ImageContainer } from './Badges.style';


const Badge = ({ url, size, variant,colortype,text }) => {
  if(variant==="square"){
    return(
      <Mainphoto>
    <AvatarImage size={size} src={url}  alt="avatar" />
<BadgeIcon colortype={colortype}/>
    </Mainphoto>
    )
  };
  if (variant === "iconBadge") {
    return (
      <ImageContainer>
        <IconImageBadge size={size} src={url} alt="avatar"  />
        <BadgeForIcon colortype={colortype}>{text}</BadgeForIcon>
      </ImageContainer>
    );
  }

  return null; 

  // return (
  //   <Mainphoto>
  //     <AvatarImage size={size} src={url} alt="avatar" />
  //     <BadgeIcon></BadgeIcon>
  //   </Mainphoto>
  // );
};

export default Badge;
