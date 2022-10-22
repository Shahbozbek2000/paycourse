import styled from 'styled-components';

export const NotFoundProvider = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const PictureTop = styled.div`
  text-align: center;
  & h1 {
   font-size: 95px;
   margin: 0;
   line-height: 70px;
  }
`;
export const NotFoundBody = styled.div`
  margin-top: 8px;
  & h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    color: #000000;
  }
  & p {
    font-size: 16px;
    line-height: 120%;
    color: rgba(0, 32, 51, 0.6);
    margin: 8px 0px;
  }
  @media (max-width: 476px) {
   & p {
      font-size: 14px;
   }
  }
`;

export const NotFoundButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 160px;
  height: 40px;
  background: rgba(0, 66, 105, 0.07);
  border-radius: 4px;
  margin: 24px 12px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  transition: all 0.5s;
  &:hover {
    background: #33cccc;
    color: white;
  }
  @media (max-width: 476px) {
   font-size: 14px;
   width: 140px;
   height: 35px;
  }
`;
