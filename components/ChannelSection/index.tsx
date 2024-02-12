"use client";
import React from "react";
import { FaBuilding, FaDollarSign, FaReact } from "react-icons/fa";
import { SiReactrouter } from "react-icons/si";
import ContentIntro from "../Utility/ContentIntro";
import {
  ChannelSectionBox,
  ChannelSectionBoxContainer,
  ChannelSectionBoxContent,
  ChannelSectionBoxIcon,
  ChannelSectionBoxTitle,
  ChannelSectionContainer,
} from "./ChannelSection.styles";
import { channelManagerData } from "../../mocks";

const iconMap: { [key: number]: JSX.Element } = {
  1: <FaReact />,
  2: <FaDollarSign />,
  3: <FaBuilding />,
  4: <SiReactrouter />,
};

const ChannelSection: React.FC = () => {
  return (
    <ChannelSectionContainer>
      <ContentIntro title="Channel Manager" content="" />
      <ChannelSectionBoxContainer>
        {channelManagerData.map((item, index) => (
          <ChannelSectionBox key={item.id} index={index}>
            <ChannelSectionBoxIcon>{iconMap[item.id]}</ChannelSectionBoxIcon>
            <ChannelSectionBoxTitle>{item.title}</ChannelSectionBoxTitle>
            <ChannelSectionBoxContent>{item.content}</ChannelSectionBoxContent>
          </ChannelSectionBox>
        ))}
      </ChannelSectionBoxContainer>
    </ChannelSectionContainer>
  );
};

export default ChannelSection;
