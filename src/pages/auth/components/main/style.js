import styled from "styled-components";
import { systemColors } from "styles/colors";

export const FormPanel = styled.button`
margin: 12px 0;
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
`

export const FormPanelWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 600px) {
   flex-direction: column-reverse;
}
`

export const FormPanelInfo = styled.p`
border: 1px solid #dadada;
width: 30%;
height: 65px;
margin:2px 0 0px 12px;
padding: 4px 8px;
border-radius: 6px;
display: none;
@media (max-width: 600px) {
   display: block;
   width: 100%;
   border: none;
   margin: 0;
   height: auto;
}
`