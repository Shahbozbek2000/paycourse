import styled from "styled-components";
import { systemColors } from "styles/colors";

export const NavbarProvider = styled.div`
 width: 100%;
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
export const NavbarBrand = styled.div`
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
padding: 8px 16px;
margin-left: 24px;
cursor: pointer;
font-family: 'Rubik', sans-serif !important;
border-radius: 6px;
background-color: #33CCCC;
color: ${systemColors.mainWhite};
font-family: 'Poppins', sans-serif;
font-size: 16px;
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
   font-size: 12px;
}
@media (max-width: 400px) {
   /* font-size: 14px; */
   width: 170px;
}

`

export const Form = styled.form`
display: flex;
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
   padding: 8px 0;
  & .excel-calendar {
   font-size: 12px;
   height: 35px;
  }
}
`
