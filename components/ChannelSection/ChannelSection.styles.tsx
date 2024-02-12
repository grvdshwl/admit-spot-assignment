import styled, { css } from "styled-components";

export const ChannelSectionContainer = styled.div`
  width: 55%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: 60px;
  @media screen and (max-width: 600px) {
    width: 80%;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    width: 80%;
  }
`;

export const ChannelSectionBoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
  }
`;
export const ChannelSectionBox = styled.div<{ index: number }>`
  padding: 20px 24px;
  border-radius: 20px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  ${(props) =>
    (props.index === 1 || props.index === 3) &&
    css`
      transform: translateY(40px);
    `}

  @media screen and (max-width: 600px) {
    transform: translateY(0px);
  }
`;
export const ChannelSectionBoxIcon = styled.div`
  font-size: 48px;
  padding: 12px;
  color: #fff;
  background: #fdc9b3;
  border-radius: 20px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 600px) {
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
  }
`;

export const ChannelSectionBoxTitle = styled.h2`
  font-size: 18px;
  fornt-weight: 500;
  @media screen and (max-width: 600px) {
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
  }
`;

export const ChannelSectionBoxContent = styled.p`
  font-size: 16px;
  opacity: 0.7;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    font-size: 14px;
  }
`;
