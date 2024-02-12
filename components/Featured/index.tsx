import React from "react";
import {
  FeaturedContainer,
  FeaturedContent,
  FeaturedIcon,
  FeaturedIconContainer,
  FeaturedTitle,
  FeaturedTitleContainer,
} from "./Featured.styles";

import yahoo from "../../assets/yahoo.png";
import spotify from "../../assets/spotify.png";
import soundCloud from "../../assets/sound-cloud.png";
import medium from "../../assets/medium.png";

const Featured = () => {
  return (
    <FeaturedContainer>
      <FeaturedTitleContainer>
        <FeaturedTitle>We Got Featured!</FeaturedTitle>
        <FeaturedContent>
          We got mentioned and listed on various platform.
        </FeaturedContent>
      </FeaturedTitleContainer>
      <FeaturedIconContainer>
        <FeaturedIcon src={yahoo} alt="yahoo" />
        <FeaturedIcon src={spotify} alt="spotify" />
        <FeaturedIcon src={soundCloud} alt="soundCloud" />
        <FeaturedIcon src={medium} alt="medium" />
      </FeaturedIconContainer>
    </FeaturedContainer>
  );
};

export default Featured;
