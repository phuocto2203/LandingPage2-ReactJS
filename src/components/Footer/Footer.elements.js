import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterImgTop = styled.img`
  margin-top: 150px;
  max-width: 100%;
  position: relative;
  z-index: -1;
  top: 10px;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  background-color: #00252e;
  color: #fff;
  height: auto;
  @media screen and (max-width: 1100px){
      height: 900px;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 130px;
  padding-right: 130px;
  height: 700px;
  margin: 0 auto;

  @media screen and (max-width: 1100px) {
    width: 500px;
    flex-direction: column-reverse;
    padding-top: 150px;
    gap: 200px;
    align-items: center;
  }
`;

export const FooterContact = styled.div`
  height: 240px;
`;

export const ContactTitle = styled.h3`
  font-size: 35px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  padding-bottom: 20px;
`;

export const ContactDesc = styled.p`
  font-family: "Open Sans", sans-serif;
  padding-bottom: 20px;
  font-size: 12px;
  max-width: 300px;
`;
export const ContactPhone = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  padding-bottom: 20px;
`;
export const ContactEmail = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  padding-bottom: 60px;
`;
export const SocialIcons = styled.div`
  width: 160px;
  font-size: 35px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 100px;
`;
export const FacebookLink = styled(Link)`
  width: 30px;
  height: 30px;
  color: white;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #00c8fd;
  }
`;
export const InstagramLink = styled(Link)`
  width: 30px;
  height: 30px;
  color: white;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #00c8fd;
  }
`;
export const TwitterLink = styled(Link)`
  width: 30px;
  height: 30px;
  color: white;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #00c8fd;
  }
`;

export const FooterSubscribe = styled.div`
  max-width: 500px;
  width: 100%;
  height: 240px;
  @media screen and (max-width: 1100px){
    transform: translateY(30%);
  }
`;

export const SubscribeTitle = styled.h3`
  font-family: "Open Sans", sans-serif;
  font-size: 25px;
  font-weight: 400;
  padding-bottom: 20px;
`;

export const SubscribeDesc = styled.p`
  font-family: "Open Sans", sans-serif;
  padding-bottom: 40px;
  font-size: 12px;
  max-width: 300px;
`;
export const SubscribeForm = styled.form`
  width: 450px;
  display: flex;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const InputText = styled.input`
  max-width: 300px;
  width: 100%;
  height: 35px;
  cursor: pointer;
  border-radius: 7px;
`;
export const SubmitBtn = styled.button`
  width: 150px;
  height: 35px;
  border: none;
  background-color: #fe52c0;
  color: #fff;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    background-color: #ff8ed6;
  }
  @media screen and (max-width: 1100px){
    transform: translateX(100%);
  }
`;
export const SubscribeErrorMessage = styled.small`
  display: none;
  color: red;
`;
