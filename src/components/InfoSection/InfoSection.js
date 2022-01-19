import React from "react";
import BodyImg1 from "../../images/illustration-grow-together.svg";
import BackgroundImgTop1 from "../../images/bg-section-top-desktop-1.svg";
import BackgroundImgBottom1 from "../../images/bg-section-bottom-desktop-1.svg";
import BodyImg2 from "../../images/illustration-flowing-conversation.svg";
import BodyImg3 from "../../images/illustration-your-users.svg";
import BackgroundImgTop2 from "../../images/bg-section-top-desktop-2.svg";
import BackgroundImgBottom2 from "../../images/bg-section-bottom-desktop-2.svg";
import {
  InfoSectionWrapper,
  BackgroundImgTop,
  InfoSectionContainer,
  InfoText,
  InfoTitle,
  InfoDesc,
  InfoImg,
  BackgroundImgBottom,
} from "./InfoSection.elements";

const InfoSection = () => {
  return (
    <>
      <InfoSectionWrapper>
        <BackgroundImgTop src={BackgroundImgTop1} />
        <InfoSectionContainer imgStart={false}>
          <InfoText>
            <InfoTitle>Grow Together</InfoTitle>
            <InfoDesc>
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form.
            </InfoDesc>
          </InfoText>
          <InfoImg src={BodyImg1} />
        </InfoSectionContainer>
        <BackgroundImgBottom src={BackgroundImgBottom1} />
      </InfoSectionWrapper>

      <InfoSectionWrapper>
        <BackgroundImgTop />
        <InfoSectionContainer imgStart={true}>
          <InfoText>
            <InfoTitle>Flowing Conversations</InfoTitle>
            <InfoDesc>
              You wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just-in-time loading for a more natural
              flow.
            </InfoDesc>
          </InfoText>
          <InfoImg src={BodyImg2}/>
        </InfoSectionContainer>
        <BackgroundImgBottom />
      </InfoSectionWrapper>

      <InfoSectionWrapper>
        <BackgroundImgTop src={BackgroundImgTop2}/>
        <InfoSectionContainer imgStart={false}>
          <InfoText>
            <InfoTitle>Your Users</InfoTitle>
            <InfoDesc>
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </InfoDesc>
          </InfoText>
          <InfoImg src={BodyImg3}/>
        </InfoSectionContainer>
        <BackgroundImgBottom src={BackgroundImgBottom2}/>
      </InfoSectionWrapper>
    </>
  );
};

export default InfoSection;
