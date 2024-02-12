import Image from "next/image";
import styled from "styled-components";
interface ImageProps {
  src: any;
  alt: string;
}
export const FeaturedContainer = styled.div`
  background: #fff3df;
  width: 60%;
  padding: 40px 60px;
  border-radius: 40px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 600px) {
    width: 80%;
    padding: 12px 16px;
    border-radius: 20px;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    width: 80%;
    padding: 24px 32px;
    border-radius: 30px;
  }
`;

export const FeaturedTitleContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media screen and (max-width: 600px) {
    gap: 4px;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
  }
`;

export const FeaturedTitle = styled.h2`
  margin: 0px;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
  }
`;
export const FeaturedContent = styled.p`
  font-size: 16px;
  margin: 0px;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
  }
`;

export const FeaturedIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    flex-direction: row;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
  }
`;

export const FeaturedIcon = styled(Image)<ImageProps>`
  width: 120px;
  height: 80px;
  object-fit: contain;
  @media screen and (max-width: 600px) {
    width: 60px;
    height: 40px;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    width: 80px;
    height: 60px;
  }
`;
