import styled from "styled-components";

export const RegisterStyled = styled.div`
  background-color: #1c1b23;

  .MainRegister {
    box-sizing: border-box;

    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: none;

    @media screen and (min-width: 1250px) {
      background-image: url("./assets/background.svg");
    }

    padding: 131px 10px 10px 10px;
    background-size: 100% 100%;
    background-position: center center;

    @media (min-width: 563px) {
      padding: 91px 0px 0px 0px;
    }

    @media (min-width: 1250px) {
      padding: 0px;

      justify-content: space-between;
    }

    .block__logo {
      position: absolute;
      left: 50%;
      top: 55px;

      

      width: 250px;
      text-align: center;
      transform: translateX(-50%);

      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 35px;
      letter-spacing: 0.1em;

      color: #f5f5f5;

      @media (min-width: 1250px) {
        transform: translateX(0%);

        left: 1%;
        top: 55px;
      }
    }
  }
`;

export const FormStyled = styled.form`
  box-sizing: border-box;

  transition: 200ms;

  width: 100%;
  max-width: 320px;
  height: 100%;

  margin: 40px 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: 100%;
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
    align-items: flex-end;

    padding: 0px 10px 105px 0px;
  }
`;
