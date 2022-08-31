import styled from "styled-components";

export const FooterStyled = styled.div`
  width: 100vw;
  height: 304px;

  .containerFooter {
    display: flex;
    height: 208px;
    margin: 28px 0;
    justify-content: space-around;
    align-items: center;

    .lineFooter {
      height: 100%;
      border-left: 2px solid red;
    }
  }

  .copyright {
    display: flex;
    justify-content: center;
  }
`;
