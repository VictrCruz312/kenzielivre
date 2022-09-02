import styled from "styled-components";

export const ProductStyle = styled.div`
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

export const ContainerProduct = styled.div`
  width: 100%;
  max-width: 1200px;

  margin-top: 10px;
  min-height: 636px;
  height: 100%;

  background-color: #1c1b23;

  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-bottom: 20px;
  }
`;

export const DivImageProduct = styled.div`
  max-width: 877px;
  width: 100%;
  max-height: 636px;
  height: 100%;

  background-color: #3f3d56;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  .miniImage {
    max-width: 1408px;
    width: 100%;

    max-height: 148px;
    height: 100%;

    background-color: #1c1b23;
    padding-left: 10px;
    padding-bottom: 10px;
    gap: 10px;

    display: flex;
    align-items: center;

    img {
      max-width: 97px;
      width: 100%;

      min-height: 124px;
      height: 100%;
      border-radius: 4px;
      padding: 5px;
    }
  }

  .borderImage {
    max-width: 148px;
    width: 100%;

    max-height: 148px;
    height: 100%;

    background: #3f3d56;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mainImage {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 502px;
    height: 100%;

    @media screen and (max-width: 768px) {
      padding: 10px;
      background-color: none;

      min-height: 442px;
      height: 100%;
    }

    img {
      max-width: 389px;
      width: 100%;

      max-height: 371px;
      height: 100%;

      border-radius: 4px;
      padding: 29px 29px;

      @media screen and (max-width: 768px) {
        max-width: 286px;
        width: 100%;

        max-height: 259px;
        height: 100%;

        padding: 0px;
      }
    }
  }
`;

export const ProductInfo = styled.div`
  max-width: 405px;
  width: 100%;
  height: 100%;

  padding: 25px 15px;

  .newProduct {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.1em;

    color: #0063cc;
  }

  .titleProduct {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;

    color: #f5f5f5;

    margin-top: 10px;
  }

  .priceProduct {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #0063cc;

    margin-top: 10px;
  }

  .stockProduct {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;

    color: #4bc083;

    margin-top: 10px;
  }

  .quantityProduct {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;

    color: #f5f5f5;

    margin-top: 5px;

    p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;
      display: flex;
      align-items: center;

      color: #f5f5f5;
    }
  }

  .buttonsProduct {
    margin-top: 78px;
  }

  .technicalProduct {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    border-top: 2px solid #f5f5f5;
    margin-top: 20px;
  }

  .heTechnical {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;

    text-align: center;
    letter-spacing: 0.1em;

    color: #f5f5f5;
    padding: 5px;
  }

  .thDark {
    background: #595679;
    border-radius: 0px 4px 4px 0px;
    padding: 14px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.1em;

    color: #222222;
  }

  .thLight {
    background: #7b799a;
    border-radius: 0px 4px 4px 0px;
    padding: 14px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.1em;

    color: #222222;
  }

  .tdDark {
    background: #7b799a;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.1em;

    color: #222222;
  }

  .tdLight {
    background: #a19fb8;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.1em;

    color: #222222;
  }

  .tableTechnical {
    width: 100%;
    background-color: #a19fb8;

    table {
      width: 100%;
    }
  }
`;
