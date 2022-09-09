import styled from "styled-components";

export const ContainerCartFinal = styled.div`
  width: 40%;

  @media (max-width: 1250px) {
    width: 100%;
  }

  margin-top: 37px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    color: white;
    text-decoration: underline;
    margin-bottom: 94px;
  }

  .detail {
    box-sizing: border-box;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .secaoCartDesconto {
    min-width: 300px;
    width: 100%;
    max-width: 452px;

    margin-bottom: 23px;

    display: flex;
    justify-content: space-between;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    color: white;

    @media (max-width: 480px) {
      .desconto {
        font-size: 22px;
      }
      .valorDesconto {
        font-size: 20px;
      }
    }
  }

  .secaoCartTotal {
    min-width: 300px;
    width: 100%;
    max-width: 452px;

    margin-top: 23px;

    display: flex;
    justify-content: space-between;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    color: white;

    @media (max-width: 480px) {
      .total {
        font-size: 22px;
      }
      .valorTotal {
        font-size: 20px;
      }
    }
  }

  .division {
    min-width: 300px;
    width: 100%;
    max-width: 452px;

    height: 3px;

    background-color: #ffffff;
  }

  .containerButtons {
    margin-top: 80px;
    padding-bottom: 10px;
    width: 100%;
    gap: 21px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
