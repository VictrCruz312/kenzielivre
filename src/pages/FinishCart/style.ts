import styled from "styled-components";

export const FinishCartStyled = styled.div`
  box-sizing: border-box;

  width: 100%;
  min-height: calc(100vh - 110px);

  @media (max-width: 1250px) {
    height: 100%;
  }

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background: rgba(28, 27, 35, 0.85);

  .mainContainer {
    box-sizing: border-box;

    width: 100%;
    height: 100vh;
    min-height: calc(100vh - 110px);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1250px) {
      width: 100%;
      height: 100%;
      min-height: calc(100vh - 110px);
    }

    @media (min-width: 1251px) {
      background-image: url("../assets/backgroundCart.svg");
      background-repeat: no-repeat;
      background-position: center center;
    }

    .cardConteudo {
      width: 80%;
      min-width: 300px;
      display: flex;
      justify-content: space-between;

      @media (max-width: 1250px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      @media (max-width: 560px) {
        width: 289px;
      }

      .divisaoFunction {
        display: none;
        @media (max-width: 1250px) {
          width: 459px;
          height: 3px;

          margin-top: 37px;

          display: inherit;

          background-color: rgba(255, 255, 255, 0.15);
        }

        @media (max-width: 560px) {
          width: 300px;
        }
      }
    }
  }
`;

export const ContainerForm = styled.div`
  margin-top: 37px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    color: white;
    text-decoration: underline;
  }
  .containerInputs {
    display: flex;
    gap: 55px;
    width: 100%;

    @media (max-width: 560px) {
      display: flex;
      flex-direction: column;
      gap: 0;
    }
  }
  .containerTextArea {
    margin-top: 37px;
    width: 100%;
  }

  .numAndComplement {
    @media (max-width: 560px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 0;
      .num {
        width: 25%;
      }
    }
  }
`;

export const FormStyled = styled.form`
  box-sizing: border-box;

  transition: 200ms;

  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
