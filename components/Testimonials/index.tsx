"use client";

import React from "react";
import {
  TestimonialBox,
  TestimonialBoxContainer,
  TestimonialBoxContent,
  TestimonialBoxUserImage,
  TestimonialBoxUserInfo,
  TestimonialBoxUserName,
  TestimonialBoxUserTitle,
  TestimonialContainer,
} from "./Testimonials.styles";
import ContentIntro from "../Utility/ContentIntro";
import { testiomonialData } from "../../mocks";

const Testimonials = () => {
  return (
    <TestimonialContainer>
      <ContentIntro title="Testimonials" content="" readMoreLink="" />
      <TestimonialBoxContainer>
        {testiomonialData.map((item) => (
          <TestimonialBox key={item.id}>
            <TestimonialBoxContent>{item.content}</TestimonialBoxContent>
            <TestimonialBoxUserInfo>
              <TestimonialBoxUserName>{item.name}</TestimonialBoxUserName>
              <TestimonialBoxUserTitle>{item.position}</TestimonialBoxUserTitle>
              <TestimonialBoxUserImage src={item.userImage} alt={item.name} />
            </TestimonialBoxUserInfo>
          </TestimonialBox>
        ))}
      </TestimonialBoxContainer>
    </TestimonialContainer>
  );
};

export default Testimonials;
