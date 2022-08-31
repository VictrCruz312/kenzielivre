import styled from "styled-components";

export const ContainerModalApresentacao = styled.div`
  max-width: 820px;
  width: 100%;
  height: 316px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  flex-wrap: wrap;

  background: rgba(0, 9, 28, 0.9);
  border-radius: 10px;
  margin: 10px;

  .divModalApresentacao {
    width: 550px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  h1 {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 54px;
    letter-spacing: 0.1em;

    color: #1054da;
  }

  h4 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.1em;

    color: #ffffff;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;
