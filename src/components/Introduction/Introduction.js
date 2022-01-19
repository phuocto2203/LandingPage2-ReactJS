import React from "react";
import { SignUpButton } from "../../globalStyle";
import {
  IntroductionContainer,
  IntroTitle,
  IntroDesc,
  IntroBanner,
  IntroAchievement,
  Community,
  CommunitiesLogo,
  CommunitiesTitle,
  CommunitiesSubTitle,
  Message,
  MessageLogo,
  MessageTitle,
  MessageSubTitle,
} from "./introduction.elements";
import IntroImg from '../../images/screen-mockups.svg'
import CommunityIcon from '../../images/icon-communities.svg'
import MessageIcon from '../../images/icon-messages.svg'
import { Container } from "../../globalStyle";
const Introduction = () => {
  return (
    <>
    <Container>
      <IntroductionContainer>
        <IntroTitle>
            Build The Community Your Fans Will Love
        </IntroTitle>
        <IntroDesc >
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
        </IntroDesc>
        <SignUpButton>Get Started For Free</SignUpButton>
        <IntroBanner src={IntroImg}/>
        <IntroAchievement>
          <Community>
            <CommunitiesLogo src={CommunityIcon}/>
            <CommunitiesTitle>
                1.4k+
            </CommunitiesTitle>
            <CommunitiesSubTitle>
                Communities Formed
            </CommunitiesSubTitle>
          </Community>
          <Message>
            <MessageLogo src={MessageIcon}/>
            <MessageTitle>
                2.7m+
            </MessageTitle>
            <MessageSubTitle>
                Messages sent
            </MessageSubTitle>
          </Message>
        </IntroAchievement>
      </IntroductionContainer>
      </Container>
    </>
  );
};

export default Introduction;
