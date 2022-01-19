import styled from 'styled-components';

export const InfoSectionWrapper = styled.div`
max-width: 100%;
margin-top: 135px;
`
export const BackgroundImgTop = styled.img`
max-width: 100%;
position: relative;
bottom: -10px;
z-index:-1;
`
export const BackgroundImgBottom = styled.img`
max-width: 100%;
position: relative;
z-index: -1;
`

export const InfoSectionContainer = styled.div`
max-width: 100%;
background-color: ${({imgStart})=>(imgStart? '#fff' : '#f6fbff' )};
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: ${({imgStart}) => (imgStart? 'row-reverse' : 'row')};
padding-left: 130px;
padding-right: 130px;

@media screen and (max-width: 1151px){
height: 600px;
flex-direction: column-reverse;
align-items: center;
justify-content: space-around;
}
`
export const InfoText = styled.div`
max-width: 485px;
@media screen and (max-width: 1151px){
text-align: center;
}
`
export const InfoTitle = styled.h3`
font-family: "Poppins", sans-serif;
font-size: 30px;
font-weight: 700;
margin-bottom: 20px;
`

export const InfoDesc = styled.div`
font-family: 'Open Sans', sans-serif;
font-size: 15px;
line-height: 25px;
`
export const InfoImg = styled.img`
width: 500px;
max-width: 100%;
`