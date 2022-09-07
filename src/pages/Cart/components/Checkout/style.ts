import styled from "styled-components";

export const CheckoutStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 16px;

  width: 100%;
  height: 100%;
  min-height: calc(100vh - 110px);
  max-height: calc(100vh - 110px);

  @media screen and (min-width: 563px) {
    width: 563px;
  }

  .containerCheck {
    display: flex;
    justify-content: center;
    align-items: center;

    .checked {
      width: 30px;
      height: 30px;
      color: #13f200;

      @media screen and (min-width: 431px) {
        width: 48px;
        height: 48px;
      }
    }

    .notChecked {
      width: 30px;
      height: 30px;
      color: #ffffff;

      @media screen and (min-width: 431px) {
        width: 48px;
        height: 48px;
      }
    }

    .arrowOne {
      width: 30%;
      fill: #13f200;

      @media screen and (min-width: 431px) {
        width: 98px;
      }
    }

    .arrowTwo {
      width: 30%;
      fill: #ffffff;

      @media screen and (min-width: 431px) {
        width: 98px;
      }
    }
  }

  .title {
    font-weight: 900;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.1em;
    text-decoration-line: underline;
    color: #fefefe;
    text-transform: uppercase;

    margin: 32px 0 34px 0;

    @media screen and (min-width: 563px) {
      font-size: 32px;
      line-height: 38px;
    }
  }

  .subtitle {
    font-weight: 900;
    font-size: 19px;
    line-height: 22px;
    letter-spacing: 0.1em;
    color: #ffffff;

    width: 100%;
    margin-bottom: 40px;
    border-bottom: 3px solid #ffffff;

    @media screen and (min-width: 563px) {
      font-size: 30px;
      line-height: 35px;
      width: 452px;
    }
  }

  .containerPayments {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-self: flex-start;
    padding: 0;
    width: 100%;

    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.1em;
    color: #ffffff;

    @media screen and (min-width: 563px) {
      padding: 0 10%;
      font-size: 24px;
      line-height: 28px;
    }

    @media screen and (min-width: 1024px) {
      padding: 0 10%;
      font-size: 24px;
      line-height: 28px;
      gap: 20px;
    }

    .checkbox {
      display: flex;
      gap: 11px;
      align-items: center;

      input {
        width: 30px;
        height: 30px;

        @media screen and (min-width: 563px) {
          width: 48px;
          height: 48px;
        }
      }
    }
  }

  .buttons {
    width: 100%;
    padding-top: 21px;
    display: flex;
    flex-direction: column;
    gap: 21px;
  }
`;
