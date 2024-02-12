"use client";
import Link from "next/link";
import styled from "styled-components";

const Styled404Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #0e185f;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
  color: #fff;
`;

const Description = styled.p`
  font-size: 16px;
  text-align: center;
  color: #fff;
`;

const GoToHomeLink = styled.a`
  display: inline-block;
  padding: 12px 16px;
  color: #0e185f;
  background: #fff;
  text-decoration: none;
  border-radius: 80px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 16px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const NotFoundPage: React.FC = () => {
  return (
    <Styled404Page>
      <Title>404 Page Not Found</Title>
      <Description>
        Sorry, the page you are looking for does not exist.
      </Description>
      <Link href="/">
        <GoToHomeLink>Go to Home</GoToHomeLink>
      </Link>
    </Styled404Page>
  );
};

export default NotFoundPage;
