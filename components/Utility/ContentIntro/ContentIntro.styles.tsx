import styled from "styled-components";

export const ContentIntroContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media screen and (max-width: 600px) {
    gap: 4px;
  }
  @media screen and (min-width: 600px) and (max-width: 1024px) {
    gap: 8px;
  }
`;

export const ContentIntroTitle = styled.h2`
  color: #333;
  font-size: 24px;
  letter-spacing: 1px;
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    font-size: 24px;
  }
`;

export const ContentIntroContent = styled.p`
  color: #666;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const ReadMoreLink = styled.p`
  color: #5bc2fa;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
