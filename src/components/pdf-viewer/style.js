import styled from "styled-components";


export const PdfViewerProvider = styled.div`
border: 1px solid rgba(0, 0, 0, 0.3);
height: 100vh;
zoom: 90%;
@media (max-width: 576px) {
   height: 100vh;
   zoom: 62%;
}
`
