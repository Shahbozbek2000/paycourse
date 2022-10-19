import styled from "styled-components";

export const PaymentWrapper = styled.div`
width: 50%;
@media (max-width: 768px) {
  width: 100%;
}
`

export const PaymentHeader = styled.div`
 & h1 {
   margin: 0;
   padding: 0;
   font-weight: 400;
   color: #32323b;
 }
@media (max-width: 450px) {
  & h1 {
    font-size: 24px;
  }
}
`
export const PaymentBody = styled.div`
 & img {
   width: 120px;
 }
`