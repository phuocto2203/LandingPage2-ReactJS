import React from "react";
import ImgTopDesktop from "../../images/bg-footer-top-desktop.svg";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import MessageLogo from "../../images/icon-messages.svg";
import PhoneIcon from "../../images/icon-phone.svg";
import EmailIcon from "../../images/icon-email.svg";
import {
  FooterImgTop,
  FooterWrapper,
  FooterContainer,
  FooterContact,
  ContactTitle,
  ContactDesc,
  ContactPhone,
  ContactEmail,
  SocialIcons,
  FacebookLink,
  InstagramLink,
  TwitterLink,
  FooterSubscribe,
  SubscribeTitle,
  SubscribeDesc,
  SubscribeForm,
  InputText,
  SubmitBtn,
  SubscribeErrorMessage,
} from "./Footer.elements";

const Footer = () => {
  return (
    <>
      <FooterImgTop src={ImgTopDesktop} />
      <FooterWrapper>
        <FooterContainer>
          <FooterContact>
            <ContactTitle>
              <img src={MessageLogo} alt="Message Icon" /> Huddle
            </ContactTitle>
            <ContactDesc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
            </ContactDesc>
            <ContactPhone>
              <img src={PhoneIcon} alt="Phone Icon"/>  Phone:+1-543-123-4567
            </ContactPhone>
            <ContactEmail>
              <img src={EmailIcon} alt="Email Icon"/>  example@huddle.com
            </ContactEmail>
            <SocialIcons>
              <FacebookLink to='/'>
                <AiFillFacebook />
              </FacebookLink >
              <InstagramLink to='/'> 
                <AiFillInstagram/>
              </InstagramLink>
              <TwitterLink to='/'>
                <FaTwitterSquare />
              </TwitterLink>
            </SocialIcons>
          </FooterContact>

          <FooterSubscribe>
            <SubscribeTitle>NEWSLETTER</SubscribeTitle>
            <SubscribeDesc>
              To recieve tips on how to grow your community, sign up to our
              weekly newsletter. We'll never send you spam or pass on your email
              address
            </SubscribeDesc>
            <SubscribeForm>
              <InputText type="email" />
              <SubmitBtn>Subscribe</SubmitBtn>
            </SubscribeForm>
            <SubscribeErrorMessage />
          </FooterSubscribe>
        </FooterContainer>
      </FooterWrapper>
    </>
  );
};

export default Footer;
