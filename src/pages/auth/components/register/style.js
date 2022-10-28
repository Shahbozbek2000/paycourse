import styled from "styled-components";
import { systemColors } from "styles/colors";
import { Row } from 'antd'


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
  width: 428px;
  min-height: 450px;
  background-color: ${systemColors.mainWhite};
  box-shadow: ${systemColors.formShadow};
  border-radius: 6px;
  &.login-form {
    min-height: auto;
  }
  @media (max-width: 451px) {
    width: 350px;
  }
  @media (max-width: 375px) {
    width: 320px;
  }
`

export const FormRow = styled(Row)`
  row-gap: 0px !important;
`

export const FormHeader = styled.div`
    text-align: center;
    margin: 24px 0;

  & h1 {
    margin: 0;
    font-weight: 400;
    font-size: 26px;
    color:#32323b;
    /* font-size: 20px; */
  } 
  & p {
    margin: 0;
  }
  @media (max-width: 576px) {
    & h1 {
      font-size: 20px;
    }
  }
`
export const FormBody = styled.div`
  width: 80%;
  margin: 0 auto;
`