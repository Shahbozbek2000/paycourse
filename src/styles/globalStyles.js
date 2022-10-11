import styled from "styled-components";
import { systemColors } from "./colors";

export const Error = styled.div`
  color: ${systemColors.errorColor};
  font-size: 12px;
  border-radius: 4px;
  padding: 2px 8px;
  text-align: left;
  margin-top: -16px;
`;

export const Label = styled.label`
  margin: 10px 0 !important;
  font-weight: 400;
  text-align: left;
  color: rgba(0, 0, 0, .8);
`;