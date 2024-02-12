import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface ImageProps {
  src: any;
  alt: string;
}

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 600px) {
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
  }
`;

export const NavigationPrimaryContainer = styled.div`
  width: 40%;

  @media screen and (max-width: 600px) {
    width: 20%;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    width: 20%;
  }
`;

export const NavigationSecondaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  @media screen and (max-width: 600px) {
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 8px;
    width: 80%;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
    width: 80%;
  }
`;

export const NavigationLink = styled(Link).attrs((props) => ({
  href: props.href,
}))`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    transform: scale(1.1);
    transition: all ease 0.2s;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const NavigationLogo = styled(Image)<ImageProps>`
  width: 60px;
  height: 60px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    width: 50px;
    height: 50px;
  }
`;
