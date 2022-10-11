import styled from "styled-components";
import { systemColors } from "styles/colors";
import { Row } from 'antd'


export const FormProvider = styled.div`
  position: relative;
  width: 428px;
  min-height:450px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Form = styled.form`
  position: absolute;
  z-index: 2;
  width: 428px;
  min-height: 450px;
  background-color: ${systemColors.mainWhite};
  box-shadow: ${systemColors.formShadow};
  border-radius: 6px;
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
    color:#32323b;
  } 
  & p {
    margin: 0;
  }
`
export const FormBody = styled.div`
  width: 80%;
  margin: 0 auto;
`