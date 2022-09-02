import styled, { css } from "styled-components";

export const CreateProductStyled = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: #1c1b23;
`;

export const ContainterCreateProduct = styled.div`
  background-color: transparent;

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: flex-end;

  @media screen and (min-width: 1250px) {
    background-image: url("./assets/backgroundCreateProduct.svg");
  }

  @media screen and (max-width: 1250px) {
    justify-content: center;
  }
`;

export const FormStyled = styled.form`
  box-sizing: border-box;

  transition: 200ms;

  width: 100%;
  max-width: 320px;
  height: 70%;

  margin: 40px 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 100%;
  }

  .divInputs {
    overflow-y: scroll;
  }

  .divButtons {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .form__title {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 41px;

    letter-spacing: 0.1em;

    color: #ffffff;
  }

  .form__optionsText {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;

    letter-spacing: 0.1em;

    color: #ffffff;
    padding: 23px;
  }
`;

export const Block = styled.div`
  display: none;

  @media (min-width: 1250px) {
    box-sizing: border-box;

    transition: 200ms;

    width: 100%;
    height: 100%;

    margin-top: 350px;

    display: flex;
    align-items: center;

    padding: 0px 10px 105px 0px;
  }
`;
