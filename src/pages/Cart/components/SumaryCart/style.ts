import styled from "styled-components";

export const Sumarystyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 16px;

  .containerCheck {
    display: flex;
    align-items: center;

    .checked {
      width: 48px;
      height: 48px;
      color: #13f200;
    }

    .notChecked {
      width: 48px;
      height: 48px;
      color: #ffffff;
    }

    .arrowOne {
      fill: #13f200;
    }

    .arrowTwo {
      fill: #ffffff;
    }
  }

  .title {
    font-weight: 900;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    letter-spacing: 0.1em;
    text-decoration-line: underline;
    color: #fefefe;
    text-transform: uppercase;

    margin: 32px 0 34px 0;
  }

  .subtitle {
    font-weight: 900;
    font-size: 30px;
    line-height: 35px;
    letter-spacing: 0.1em;
    color: #ffffff;

    width: 452px;
    padding-bottom: 44px;
    border-bottom: 3px solid #ffffff;
  }

  .containerSumary {
    display: flex;
    flex-direction: column;
    gap: 27px;

    margin: 18px 0 32px 0;

    font-weight: 900;
    font-size: 26px;
    line-height: 30px;
    letter-spacing: 0.1em;
    color: #ffffff;

    .values {
      font-size: 23px;
      line-height: 27px;
    }

    .lineSumary {
      display: flex;
      width: 452px;
      justify-content: space-between;
      align-items: center;

      .totalName {
        font-size: 29px;
        line-height: 34px;
      }

      .totalValue {
        font-size: 26px;
        line-height: 30px;
      }
    }
    .lineSumaryTotal {
      display: flex;
      width: 452px;
      justify-content: space-between;
      align-items: center;
      border-top: 3px solid #ffffff;
      padding: 11px;
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 21px;

    padding-bottom: 10px;
  }
`;
