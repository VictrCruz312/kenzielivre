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

  width: 100%;
  height: 100%;
  min-height: calc(100vh - 140px);

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  padding: 10px;

  @media screen and (min-width: 1250px) {
    padding: 0px;

    background-image: url("./assets/backgroundCreateProduct.svg");
    background-repeat: no-repeat;
    background-position: center;
  }

  @media screen and (max-width: 1250px) {
    justify-content: center;
  }
  @media(min-width:890px){

    min-height: calc(100vh - 110px);
  }
`;

export const FormStyled = styled.form`
  box-sizing: border-box;

  transition: 200ms;

  width: 100%;
  max-width: 320px;
  height: auto;

  margin: 40px 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 100%;
  }

  .divInputs {

    width: auto;
    height: 500px;

    overflow-y: scroll;
    
    ::-webkit-scrollbar{
      width: 10px;
    }

    ::-webkit-scrollbar-thumb{
      width: 10px;
      border-radius: 4px;
      background-color: #3F3D56;
    }
  }
  .divInferior{
    width: 100%;
  }
  .divButtons {
    width: 100%;

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

    align-self: flex-start;
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

