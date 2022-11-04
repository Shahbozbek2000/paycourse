import styled from "styled-components";
import { systemColors } from "styles/colors";

export const FormPanel = styled.button`
margin: 6px 0;
width: 300px;
height: 65px;
border-radius: 6px;
border: none;
outline: none;
font-size: 24px;
background-color: ${systemColors.btnColor};
color: ${systemColors.mainWhite};
cursor: pointer;
border: 2px solid transparent;
transition: all .3s ease;
&:hover {
color: ${systemColors.btnColor};
background-color: transparent;
border: 2px solid ${systemColors.btnColor};
}
@media (max-width: 396px) {
   width: 250px;
   font-size: 22px;
}
@media (max-width: 340px) {
   width: 220px;
   height: 50px;
   font-size: 18px;
}
`

export const FormPanelWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 8px 0;
`

export const FormPanelInfo = styled.p`
/* display: none; */
color: rgba(0, 0, 0, 0.5);
@media (max-width: 600px) {
   display: block;
   width: 100%;
   border: none;
   margin: 0;
   height: auto;
   font-size: 13px;
}
`
