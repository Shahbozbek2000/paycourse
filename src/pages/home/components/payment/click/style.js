import styled from "styled-components";

export const ClickWrapper = styled.button`
width:280px;
border:1px solid #eee;
background-color: #f5f5f5;
border-radius:8px;
margin:16px;
padding:8px 24px;
cursor:pointer;
outline:none;
transition:all 0.3s ease;
box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
&:hover{
   background-color: #fff; 
}
&.active{
   background-color: #fff;
   /* border-color:orange; */
}
img{
   width:100%;
   height:80px;
   object-fit:contain;
   object-position:center;
}

`