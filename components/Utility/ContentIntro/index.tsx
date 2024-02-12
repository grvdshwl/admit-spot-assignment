import React from "react";
import {
  ContentIntroContainer,
  ContentIntroContent,
  ContentIntroTitle,
  ReadMoreLink,
} from "./ContentIntro.styles";

interface ContentIntroProps {
  title: string;
  content?: string;
  readMoreLink?: string;
}

let mockContent =
  "Lorem ipsum is derived from the Latin “dolorem ipsum” roughly translated as “pain itself.” Lorem ipsum presents the sample font and orientation of writing on web pages and other software applications.";

const ContentIntro: React.FC<ContentIntroProps> = ({ title, content }) => {
  return (
    <ContentIntroContainer>
      <ContentIntroTitle>{title}</ContentIntroTitle>
      <ContentIntroContent>{content || mockContent}</ContentIntroContent>
      <ReadMoreLink>Read more &rarr;</ReadMoreLink>
    </ContentIntroContainer>
  );
};

export default ContentIntro;
