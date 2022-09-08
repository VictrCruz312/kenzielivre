import styled from "styled-components";

export const ProductCartStyled = styled.ul`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;

  padding: 10px;

  width: 100%;
  min-width: 300px;
  height: 100%;

  min-height: calc(100vh - 110px);
  max-height: calc(100vh - 110px);

  overflow: hidden scroll;

  @media(min-width:1200px){
    padding: 20px;
  }

  .product {
    box-sizing:border-box;

    display: flex;
    justify-content: space-between;
    gap: 15px;
    align-items: center;

    max-width: 729px;
    width: 95%;

    border-radius: 5px;
    background-color: #d0d1e5;

    @media screen and (min-width: 1024px) {
    }

    .containerImg {
      height: 100%;
      padding: 0 5px 0 0;

      @media screen and (min-width: 563px) {
        padding: 10px 30px 10px 16px;
      }

      img {
        background-color: #21252b;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        width: 92px;
        height: 100%;

        @media screen and (min-width: 563px) {
          height: 92px;
          border-radius: 50%;
        }
      }
    }

    .containerNameCorAmount {
      display: flex;
      gap: 0;
      flex-direction: column;

      @media screen and (min-width: 563px) {
        flex-direction: row;
        gap: 10px;
      }

      .nameAndCor {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;

        @media screen and (min-width: 563px) {
          flex-direction: row;
          gap: 20px;
          align-items: center;
        }
        .containerNome {
          display: flex;
          flex-direction: column;
          gap: 9px;

          p {
            font-weight: 400;
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0.1em;
            color: #000000;
          }

          span {
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            letter-spacing: 0.1em;
            color: #5e5e5e;
          }
        }

        .containerCor {
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          color: #000000;
        }
      }

      .containerAmount {
        display: flex;
        align-items: center;
        gap: 10px;

        .BtnsAmount {
          display: flex;
          flex-direction: column;
          gap: 3px;

          button {
            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 50%;
            width: 24px;
            height: 24px;
            padding: 0 1px 0 0;
            border: none;

            background-color: #8e8e8e;

            svg {
              width: 19px;
              height: 19px;
            }
          }
        }
      }
    }

    .containerPriceRemove {
      height: 100%;
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
      align-items: flex-end;

      @media screen and (min-width: 563px) {
        align-items: center;
        flex-direction: row;
      }

      .containerPrice {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.1em;
        color: #000000;
        align-self: flex-end;
        padding: 0 10px 10px 0;

        @media screen and (min-width: 563px) {
          padding: 0;
          align-self: center;
        }
      }

      .containerRemove {
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        cursor: pointer;

        height: 115px;
        width: 57px;
        border: none;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        background-color: inherit;
        padding: 10px 0 0 0;

        @media screen and (min-width: 563px) {
          padding: 0;
          background-color: rgba(33, 37, 43, 0.89);
          align-items: center;
          justify-content: center;
        }

        svg {
          width: 29px;
          height: 24px;
        }
      }
    }
  }

  .cartVazio {
    margin-top: 20%;
    max-width: 90%;
    font-weight: 400;
    font-size: 24px;
    line-height: 26px;
    color: #ffffff;
    background-color: rgba(33, 37, 43, 0.29);
    padding: 10px 30px;
    border-radius: 10px;
    box-shadow: inset 2px 3px 20px 9px rgb(33 37 43 / 99%);
  }
`;
