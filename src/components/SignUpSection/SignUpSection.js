import React from "react";
import {Container, SignUpButton} from "../../globalStyle";
import { SignUpSectionContainer, SignUpTitle} from "./SignUpSection.elements";
const SignUpSection = () => {
  return (
    <>
      <Container>
      <SignUpSectionContainer>
        <SignUpTitle>Ready To Build Your Community?</SignUpTitle>
        <SignUpButton>Get Started For Free</SignUpButton>
      </SignUpSectionContainer>
      </Container>
    </>
  );
};

export default SignUpSection;
