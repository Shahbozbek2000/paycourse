import styled from 'styled-components';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

export const CustomCalendar = styled(DatePicker)`
  width: 100%;
  height: 45px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  /* margin-top: 16px !important; */
  /* margin-bottom: 8px !important; */
  &:focus {
    box-shadow: none !important;
    background: #fff;
  }
  &.ml-2 {
    margin-left: 10px;
  }
  &.calendar-error {
    border: 1px solid #e54e53;
  }
`;
export const CustomTwoCalendar = styled(RangePicker)`
  width: 100%;
  height: 35px;
  background: #ffffff;
  border: 1px solid #bcc6d4;
  border-radius: 4px;
  margin-top: 16px !important;
  margin-bottom: 8px !important;
  &:focus {
    box-shadow: none;
  }
`;
