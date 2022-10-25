import styled from "styled-components";
import { systemColors } from "styles/colors";
import { Link } from "react-router-dom";

export const NavbarProvider = styled.div`
 position: sticky;
 left: 0;
 top: 0;
 z-index: 1000;
 width: 100%;
 height: 90px;
 margin: 0px auto;
 display: flex;
 align-items: center; 
 justify-content: space-between;
 margin-bottom: 32px;
 background-color: ${systemColors.mainWhite};
 box-shadow: 0 5px 5px rgb(0 0 0 / 5%);
 @media (max-width: 400px) {
    align-items: center;
   }
   `
export const NavbarBrand = styled(Link)`
cursor: pointer;
/* padding: 16px 0; */
`
export const Image = styled.img`
width: 100px;
`



export const DownLoadExcel = styled.button`
border: none;
outline: none;
display: inline-block;
padding: 4px 16px;
height: 40px;
margin-left: 24px;
cursor: pointer;
font-family: 'Rubik', sans-serif !important;
border-radius: 4px;
background-color: #33CCCC;
color: ${systemColors.mainWhite};
font-family: 'Poppins', sans-serif;
font-size: 14px;
border: 1px solid transparent;
transition: all .3s;
box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
& > svg {
   margin-left: 10px;
}
&:hover {
   background-color: #3AA08F;
}
@media (max-width: 576px) {
   margin-top: 12px;
}
@media (max-width: 400px) {
   font-size: 14px;
   /* width: 170px; */
   height: 40px;
}
@media (max-width: 1280px) {
   height: auto;
}

`

export const Form = styled.form`
display: flex;
align-items: center;
& .excel-calendar {
   margin-right: 24px !important;
   box-shadow: none !important;
   &:focus {
      border: 1px solid #33cccc;
   }
}
@media (max-width: 576px) {
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 8px 0;
  & .excel-calendar {
   font-size: 12px;
   height: 35px;
  }
}
`

export const MobileIcon = styled.div`
  display: none;
  width: 20px;
  svg {
    width: 18px;
    font-weight: lighter !important;
  }
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    width: 20px;
    color: black;
    top: -2px;
    right: 20px;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    transition: all 5s linear;
  }
`;


export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    width: 100%;
    height: auto;
    min-height: auto;
    padding: 0 0 24px 0;
    z-index: -10;
    top:80px;
    top: ${({ click }) => (click ? '90px' : "-42vh")};
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    background: #fff;
    box-shadow:  0 5px 5px rgb(0 0 0 / 5%);
  }
  @media (max-width: 330px) {
   height: 40vh;
  }
`;

export const NavTitle = styled.p`
   margin-top: 12px;
   font-size: 14px;
   color:  #313131 !important;
   & span {
      border: 1px solid #bcc6d4;
      display: inline-block;
      margin-left: 12px;
      padding: 4px 8px;
      border-radius: 4px;
      @media (max-width: 576px) {
         margin-left: 0;
      }
   }
   @media (max-width: 576px) {
      width: 80%;
      font-size: 16px;
   }
   @media (max-width: 245px) {
      font-size: 12px;
   }
`