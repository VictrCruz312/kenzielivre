import styled from "styled-components";

export const ContainerCheck = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding-top: 16px;

  @media (max-width: 560px) {
    width: 289px;
  }

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
`;
