"use client";
import React from "react";
import {
  StatisticCollectionBox,
  StatisticCollectionContainer,
  StatisticCollectionSubTitle,
  StatisticCollectionCount,
  StatisticCollectionBoxWrapper,
} from "./StatisticCollection.styles";
import { statiticsData } from "../../mocks";

const StatisticCollection = () => {
  return (
    <StatisticCollectionContainer>
      {statiticsData.map((item, index) => (
        <StatisticCollectionBoxWrapper key={item.id} index={index % 3}>
          <StatisticCollectionBox>
            <StatisticCollectionCount>{item.count}+</StatisticCollectionCount>
            <StatisticCollectionSubTitle>
              {item.subtitle}
            </StatisticCollectionSubTitle>
          </StatisticCollectionBox>
        </StatisticCollectionBoxWrapper>
      ))}
    </StatisticCollectionContainer>
  );
};

export default StatisticCollection;
