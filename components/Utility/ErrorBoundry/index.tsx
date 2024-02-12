"use client";
import React, { Component, ReactNode } from "react";
import styled from "styled-components";
import errorIllustration from "../../../assets/error.jpg";
import Image from "next/image";

interface ImageProps {
  src: any;
  alt: string;
}

const ErrorMessage = styled.div`
  color: #ff0000;
  font-size: 18px;
  text-align: center;
`;

export const Illustration = styled(Image)<ImageProps>`
  width: 500px;
  height: 500px;
  object-fit: cover;
  @media screen and (max-width: 600px) {
    width: 200px;
    height: 200px;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    width: 400px;
    height: 400px;
  }
`;

const ErrorBoundaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorText = styled.p`
  margin: 10px 0;
`;

// Props interface
interface ErrorBoundaryProps {
  children: ReactNode;
}

// State interface
interface ErrorBoundaryState {
  hasError: boolean;
}

// Error boundary component
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorBoundaryContainer>
          <Illustration src={errorIllustration} alt="Error Illustration" />
          <ErrorMessage>
            <ErrorText>Oops! Something went wrong.</ErrorText>
            <ErrorText>
              We apologize for the inconvenience. Please try again later.
            </ErrorText>
          </ErrorMessage>
        </ErrorBoundaryContainer>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
