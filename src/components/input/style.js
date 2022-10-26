import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 38px;
  background: #FFFFFF;
  border: 1px solid #dadada;
  border-radius: 6px;
  font-size: 14px;
  font-family: 'Rubik', sans-serif;
  box-sizing: border-box;
  outline: none;
  color:  #313131 !important;
  margin-bottom: 8px !important;
  text-indent: 12px;
  transition: all .3s ease;
  &.input-error {
    border: 1px solid #e54e53;
  }
  &::placeholder {
    font-size: 14px;
    color: #a8a8a8;
    font-family: 'Rubik', sans-serif !important;
  }
  &:disabled {
    background: #f5f5f5;
  }
  &:focus {
    border: 1px solid #33CCCC;
     }
`;

export const FormGroupProvider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &.form-password {
    position: relative;
  }
  /* span {
    margin-left: 8px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ddd;
    color: #ddd;
    font-size: 12px;
    cursor: help;
  } */
`;

