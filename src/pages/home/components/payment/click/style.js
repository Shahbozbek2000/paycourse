import styled from "styled-components";

export const PaymentProvider = styled.div`
display: flex;
width: 400px;
margin-top: 16px;
& h3 {
   font-weight: 400;
   /* font-size: 18px; */
}
@media (max-width: 450px) {
   width: auto;
   margin: 0;
}
`

export const Image = styled.img`
width: 250px !important;
@media (max-width: 450px) {
   margin: auto;
}
`
export const ClickWrapper = styled.button`
width:280px;
border:2px solid transparent;
background-color: #fff;
border-radius:8px;
padding:8px 24px;
cursor:pointer;
outline:none;
transition:all .4s ease-in-out;
box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
margin: 16px 0;
&:nth-child(2) {
   margin-left: 16px;
}
&:hover{
   background-color: #fff; 
   border: ${props => props.hasChecked ? '2px solid #33cccc' : '2px solid transparent' };
}
&.active{
   background-color: #fff;
   /* border-color:orange; */
}
&:disabled {
   opacity: 0.4;
   cursor: default;
}
img{
   width:100%;
   height:60px;
   object-fit:contain;
   object-position:center;
}
`

