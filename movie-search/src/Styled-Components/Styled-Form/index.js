import styled from "styled-components"

export const FormBox = styled.div`
  margin-top: 50px;
  width: 50%;

  @media (max-width: 768px) {
    margin-top: 20px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
      width: 50%;
    }
  }

  input {
    height: 30px;
    border-radius: 32px;
    padding: 10px;
    font-size: 30px;

    @media (max-width: 768px) {
      height: 20px;
      padding: 5px;
      font-size: 20px;
    }
  }

  button {
    margin-top: 20px;
    width: 100px;
    height: 30px;
    border-radius: 32px;
    font-size: 20px;
    background-color: white;

    @media (max-width: 768px) {
      margin-top: 10px;
      width: 50px;
      height: 25px;
      font-size: 10px;
    }
  }
`