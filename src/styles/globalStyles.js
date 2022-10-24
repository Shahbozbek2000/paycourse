import styled from "styled-components";
import { systemColors } from "./colors";

export const Error = styled.div`
  color: ${systemColors.errorColor};
  font-size: 12px;
  padding: 6px 8px;
  text-align: left;
  margin-top: 0px;
  background-color: rgb(235, 238, 242);
  border-radius: 6px;
  color: rgb(252, 7, 7);
  font-size: 13px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  & svg {
    margin-right: 7px;
  }
`;

export const Label = styled.label`
  margin: 10px 0 !important;
  font-weight: 400;
  text-align: left;
  color: rgba(0, 0, 0, .8);
`;

export const Footer = styled.div`
  margin: 8px 0 32px 0;
`

export const FormProvider = styled.div`
  height:100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  padding: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const Form = styled.form`
  min-width: 428px;
  min-height: 450px;
  background-color: ${systemColors.mainWhite};
  box-shadow: ${systemColors.formShadow};
  border-radius: 6px;
  &.login-form {
    min-height: auto;
  }
  &.main-form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: 451px) {
    min-width: 350px;
  }
  @media (max-width: 375px) {
    &.main-form {
      min-width: 320px;
    }
  }
  @media (max-width: 335px) {
    &.main-form {
      min-width: 300px;
    }
  }
`