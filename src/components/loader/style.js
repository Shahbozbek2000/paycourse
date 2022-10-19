import styled from 'styled-components'

export const LoaderWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: 38px;
& > div {
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   right: 60px;
}
@media (max-width: 450px) {
   & > div {
      right: 20px;
   }
}
`