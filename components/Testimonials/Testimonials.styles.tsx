import Image from "next/image";
import styled from "styled-components";

interface ImageProps {
  src: any;
  alt: string;
}
export const TestimonialContainer = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 600px) {
    width: 75%;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    width: 80%;
  }
`;

export const TestimonialBoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 60px;
  gap: 40px;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const TestimonialBox = styled.div`
  position: relative;

  background: #fff3df;
  padding: 48px;
  border-top-left-radius: 60px;
  border-bottom-right-radius: 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 600px) {
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
  }
`;

export const TestimonialBoxContent = styled.p`
  line-height: 25px;
  opacity: 0.8;
  @media screen and (max-width: 600px) {
    line-height: 20px;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
  }
`;

export const TestimonialBoxUserInfo = styled.div`
  @media screen and (max-width: 600px) {
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
  }
`;

export const TestimonialBoxUserName = styled.p`
  font-size: 18px;
  font-weight: 600;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
  }
`;

export const TestimonialBoxUserTitle = styled.p`
  font-size: 12px;
  font-weight: 600;
  margin-top: 4px;
  opacity: 0.5;
  @media screen and (max-width: 600px) {
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
  }
`;

export const TestimonialBoxUserImage = styled(Image)<ImageProps>`
  position: absolute;
  width: 65px;
  height: 65px;
  object-fit: cover;
  border-radius: 50%;
  bottom: 30px;
  left: 0px;
  transform: translatex(-55%);
  @media screen and (max-width: 600px) {
    width: 60px;
    height: 60px;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    width: 80px;
    height: 80px;
  }
`;
