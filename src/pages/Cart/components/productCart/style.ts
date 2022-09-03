import styled from "styled-components";

export const ProductCartStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;
  
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 110px);

  padding-top: 77px;

  .product {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 729px;
    width: 729px;

    border-radius: 5px;
    background-color: #d0d1e5;

    .containerImg {
      padding: 10px 30px 10px 16px;

      img {
        background-color: #21252b;
        border-radius: 50%;
        width: 92px;
        height: 92px;
      }
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

    .containerCor {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #000000;
    }

    .containerRemove {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      height: 115px;
      width: 57px;
      border: none;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      padding: 0;

      background-color: rgba(33, 37, 43, 0.89);

      svg {
        width: 29px;
        height: 24px;
      }
    }
  }
`;
