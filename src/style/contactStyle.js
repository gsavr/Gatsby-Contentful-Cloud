import styled from "styled-components";

export const FormWrapper = styled.div`
  margin: auto 20vw;
  padding: auto 40px;
`;

export const InputWrapper = styled.div`
  input,
  textarea {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

export const ButtonWrapper = styled.div`
  button {
    width: 100%;
    background-color: #ffa500;
    color: dark-grey;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;
