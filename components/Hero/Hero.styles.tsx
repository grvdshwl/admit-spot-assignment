import Image from "next/image";
import styled from "styled-components";

interface HeroImageProps {
  src: any;
  alt: string;
}

export const HeroContainer = styled.div`
  background: #0e185f;
  height: 85vh;
  padding: 16px 84px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;
  @media screen and (max-width: 600px) {
    height: 720px;
    padding: 12px 16px;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    height: 90vh;
    padding: 20px 40px;
  }
`;

export const HeroNavBox = styled.div``;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 12px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const HeroPrimaryContainer = styled.div`
  color: #fff;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  @media screen and (max-width: 600px) {
    width: 100%;
    gap: 8px;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    width: 100%;
    gap: 16px;
  }
`;

export const HeroSecondaryContainer = styled.div`
  width: 65%;

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    width: 100%;
  }
`;

export const HeroTitlePrimary = styled.h2`
  font-size: 20px;
  font-weight: 500;
  margin: 0px;
  width: 100%;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export const HeroTitleSecondary = styled.h1`
  line-height: 70px;
  font-size: 54px;
  margin: 0px;

  @media screen and (max-width: 600px) {
    font-size: 32px;
    line-height: 40px;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    font-size: 48px;
    line-height: 60px;
  }
`;

export const HeroPara = styled.p`
  opacity: 0.8;
  font-size: 16px;

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const HeroImage = styled(Image)<HeroImageProps>`
  width: 100%;
  object-fit: contain;
  @media screen and (max-width: 600px) {
    height: 100%;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    height: 100%;
  }
`;

export const HeroButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;
