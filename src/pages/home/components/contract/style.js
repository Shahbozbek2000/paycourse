import styled from "styled-components";
import { systemColors } from "styles/colors";

export const ContractProvider = styled.div`
 display: flex;
 flex-direction: column;
 & h2 {
  font-weight: 400;
    color: #32323b;
    margin: 0;
    text-transform: capitalize;
 }
 @media (min-width: 576px) {
  & h2 {
    display: none;
  }
}
 @media (max-width: 768px) {
  & img {
    width: 100%;
  }
 }
`

export const HasChecked = styled.div`
 padding: 16px 0;
`

export const DownloadContract = styled.a`
display: inline-block;
border: 1px solid ${systemColors.btnColor};
padding: 4px 8px;
color: ${systemColors.btnColor} !important;
border-radius: 4px;
margin-top: 12px;
width: 240px;
@media (min-width: 576px) {
  display: none;
}
`