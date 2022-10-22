import styled from "styled-components";


export const PdfViewerProvider = styled.div`
/* border: 1px solid rgba(0, 0, 0, 0.2); */
height: 700px;
zoom: 90%;
& > div > div > div::-webkit-scrollbar {
   width: 6px;
}
& > div > div > div::-webkit-scrollbar-thumb {
   background-color: rgba(0, 0, 0, 0.3);
}

@media (max-width: 576px) {
   zoom: 62%;
}
`
