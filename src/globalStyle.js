import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    max-width: 1440px;

}
`
export const Container = styled.div`
max-width: 1360px;
margin: 0 auto;
padding-left: 60px;
padding-right: 60px;
@media screen and (max-width: 1125px ){
    padding-left: 30px;
    padding-right: 30px;
}
`

export const SignUpButton = styled.button`
width: 350px;
height: 60px;
background: #fd53c0;
color: #fff;
text-align: center;
font-family: 'Open Sans', sans-serif;
font-size: 15px;
border-radius: 40px;
box-shadow: -2px 2px 6px 1px #e7dee4;
border: none;
font-weight: 700;
cursor: pointer;
&:hover{
    background: #ff8ed6;
}
`
export default GlobalStyle;