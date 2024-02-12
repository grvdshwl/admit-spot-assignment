"use client";
import React from "react";
import {
  HeroButtonContainer,
  HeroContainer,
  HeroContent,
  HeroImage,
  HeroNavBox,
  HeroPara,
  HeroPrimaryContainer,
  HeroSecondaryContainer,
  HeroTitlePrimary,
  HeroTitleSecondary,
} from "./Hero.styles";
import Navigation from "../Navigation";
import heroSvg from "../../assets/hero.svg";
import Button from "../Utility/Button";
import { FaChevronRight } from "react-icons/fa";
import Featured from "../Featured";
const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroNavBox>
        <Navigation />
      </HeroNavBox>
      <HeroContent>
        <HeroPrimaryContainer>
          <HeroTitlePrimary>Free Open Source</HeroTitlePrimary>
          <HeroTitleSecondary>
            Reservation And Booking System For Hotels
          </HeroTitleSecondary>
          <HeroPara>Take your hotel business online with help of us</HeroPara>
          <HeroButtonContainer>
            <Button
              backgroundColor="#06fede"
              color="#000"
              outline={false}
              handleClick={() => {}}
              icon={FaChevronRight}
            >
              View Demo
            </Button>
            <Button
              backgroundColor="#0e185f"
              color="#fff"
              outline={true}
              handleClick={() => {}}
            >
              Download
            </Button>
          </HeroButtonContainer>
        </HeroPrimaryContainer>
        <HeroSecondaryContainer>
          <HeroImage src={heroSvg} alt="hero-svg" />
        </HeroSecondaryContainer>
      </HeroContent>
      <Featured />
    </HeroContainer>
  );
};

export default Hero;
