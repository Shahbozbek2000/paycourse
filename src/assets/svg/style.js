import styled from "styled-components";

export const SvgProvider = styled.div`
position: absolute;
left: -8%;
z-index: 1;
top: -120px;
& svg {
   width: 150px;
}
@media (max-width: 576px) {
   display: none;
}
`
export const SvgBottomProvider = styled.div`
position: absolute;
bottom: -95px;
z-index: 1;
right: -13%;
& svg {
   width: 150px;
}
@media (max-width: 576px) {
   display: none;
}
`