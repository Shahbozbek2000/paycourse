import styled from 'styled-components'
import { systemColors } from '../../styles/colors'

export const Button = styled.button`
position: relative;
border: none;
display: inline-block;
padding: 8px 16px;
height: 38px;
width: 100%;
margin: 16px 0;
margin-bottom: 35px;
cursor: pointer;
font-family: 'Rubik', sans-serif !important;
border-radius: 6px;
background-color: #33CCCC;
color: ${systemColors.mainWhite};
font-family: 'Poppins', sans-serif;
font-size: 14px;
border: 1px solid transparent;
transition: all .3s;
&:disabled {
   opacity: 0.5;
}

`
export const IsloadindWrap = styled.div`
 position: absolute;
 top: 0;
 left: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 width: 100%;
 height: 38px;
 margin: 0 auto;
 & > .isloading-text {
   font-size: 14px;
   width: 100%;
   position: absolute;
 }
`