import styled from 'styled-components';

export const PhoneMaskProvider = styled.div``;
export const Wrapper = styled.div`
  /* margin-top: 8px; */
  margin-bottom: 8px;
  & input {
    border: 1px solid #eee;
    width: 100%;
    height: 38px;
    border-radius: 6px; 
    border: 1px solid #dadada;
    font-family: 'Rubik', sans-serif;
    background-color: transparent;
    outline: none;
    text-indent: 20px;
    padding: 0;
    transition: all 0.3s;
    margin-bottom: 8px;
    &::placeholder {
      font-size: 14px;
    font-family: 'Rubik', sans-serif;
    }
    &.input-error {
      border: 1px solid #d2504d !important;
    }
    &:focus {
    border: 1px solid #33CCCC;
  }
  }
`;
