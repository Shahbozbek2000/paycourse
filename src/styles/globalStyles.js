import styled from "styled-components";
import { systemColors } from "./colors";

export const Error = styled.div`
  color: ${systemColors.errorColor};
  font-size: 12px;
  padding: 6px 8px;
  text-align: left;
  margin-top: -8px;
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