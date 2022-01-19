import styled from "styled-components";

export const IntroductionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 200px;
  @media screen and (max-width: 1125px){
    margin-top: 120px;
  }
`;

export const IntroTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin-bottom: 50px;
  font-size: 37px;
  color: black;
  text-align:center;
`;

export const IntroDesc = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 19px;
  max-width: 600px;
  color: black;
  font-weight: 400;
  margin-bottom: 60px;
  text-align: center;
`;

export const IntroBanner = styled.img`
  margin-top: 110px;
  max-width: 1025px;
  width: 100%;
  height: auto;
  margin-bottom: 115px;
`;
export const IntroAchievement = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;

@media screen and (max-width: 951px){
flex-direction: column;
gap: 250px;
align-items: center;
}
`;

export const Community = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CommunitiesLogo = styled.img`
  width: 50px;
  height: 40px;
  margin-bottom: 30px;
`;
export const CommunitiesTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 80px;
  margin-bottom: 45px;
  color: black;
`;

export const CommunitiesSubTitle = styled.p`
  font-family: "Open Sans", sans-serif;
  color: #9396a7;
  text-align: center;

`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MessageLogo = styled.img`
  width: 50px;
  height: 40px;
  margin-bottom: 30px;
`;
export const MessageTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 80px;
  margin-bottom: 45px;
  color: black;
`;

export const MessageSubTitle = styled.p`
  font-family: "Open Sans", sans-serif;
  color: #9396a7;
  text-align: center;
`;
