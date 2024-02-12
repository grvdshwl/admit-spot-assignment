import styled from "styled-components";

const boxColors: string[] = ["#ff9a89", "#ffd874", "#55d0d8"];

interface StatisticCollectionBoxWrapperProps {
  index: number;
}

export const StatisticCollectionBoxWrapper = styled.div<StatisticCollectionBoxWrapperProps>`
  background: ${(props) => boxColors[props.index]};
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: relative;

  @media screen and (max-width: 600px) {
    width: 50px;
    height: 50px;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
  }
`;
export const StatisticCollectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 55%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 600px) {
    width: 70%;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    width: 80%;
  }
`;

export const StatisticCollectionBox = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  position: absolute;
  transform: translate(-22%, 15%);

  @media screen and (max-width: 600px) {
    gap: 24px;
    transform: translate(-20%, 15%);
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    gap: 28px;
  }
`;

export const StatisticCollectionCount = styled.h2`
  font-size: 42px;
  color: #333333;
  @media screen and (max-width: 600px) {
    font-size: 24px;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    font-size: 36px;
  }
`;

export const StatisticCollectionSubTitle = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #333333;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    font-size: 16px;
  }
`;
