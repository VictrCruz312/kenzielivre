import styled from "styled-components";

export const CartStyled = styled.div`
  background-color: #1c1b23;

  width: 100vw;
  max-width: 100vw;

  height: 100%;
  min-height: calc(100vh - 110px);

  overflow: scroll hidden;

  ::-webkit-scrollbar {
    width: 10px;
    background-color: none;
  }

  ::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: #f5f5f5;
    border-radius: 4px;
  }

  @media screen and (min-width: 1024px) {
    background: rgba(28, 27, 35, 0.85);
  }

  .mainCart {
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 110px);
    min-width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    padding-top: 24px;

    @media screen and (min-width: 1024px) {
      background-image: url("../assets/backgroundCart.svg");
      background-repeat: no-repeat;
      background-position: center center;
      flex-direction: row;
      justify-content: space-between;
      padding-top: 0;
    }

    .containerBox {
      @media screen and (max-width: 1024px) {
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 563px;
        height: 680px;
      }
    }

    .containerBoxLarge {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      @media screen and (max-width: 1024px) {
        width: 100%;
        max-width: 563px;
      }
    }
  }
`;
