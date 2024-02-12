"use client";
import React, { ReactNode } from "react";
import styled from "styled-components";

interface AppWrapperProps {
  children: ReactNode;
}

const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 150px;
  margin-bottom: 200px;
  @media screen and (max-width: 600px) {
    margin-bottom: 120px;
    gap: 100px;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    margin-bottom: 150px;
    gap: 120px;
  }
`;

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  return <StyledAppWrapper>{children}</StyledAppWrapper>;
};

export default AppWrapper;
