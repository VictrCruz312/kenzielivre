import styled from "styled-components";

export const CartStyled = styled.div`
  background: rgba(28, 27, 35, 0.85);

  width: 100%;
  max-width: 100vw;

  height: 100%;
  min-height:calc(100vh - 110px);

  overflow: scroll hidden;

  ::-webkit-scrollbar{
    width: 10px;
    background-color: none;
  }

  ::-webkit-scrollbar-thumb{
    width: 10px;
    background-color: #F5F5F5;
    border-radius: 4px;
  }

  .mainCart {
    box-sizing: border-box;

    width: 100%;
    height: 100%;
    min-height: calc(100vh - 110px);

    display: flex;

    background-image: url("./assets/backgroundCart.svg");
    background-repeat: no-repeat;
    background-position: center center;

  }
`;
