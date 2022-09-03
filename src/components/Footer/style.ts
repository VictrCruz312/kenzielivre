import styled from "styled-components";

export const FooterStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 304px;
  background-color: rgba(63, 61, 86, 1);
  padding: 28px 0;

  @media screen and (max-width: 563px) {
    height: 363px;
    padding: 12px;
  }

  .containerFooter {
    display: flex;
    height: 208px;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 563px) {
      flex-wrap: wrap;
      height: 363px;
      gap: 18px;
    }

    .lineFooter {
      opacity: 0.2;
      height: 208px;
      border-left: 2px solid #f5f5f5;

      @media screen and (max-width: 563px) {
        height: 0;
        width: 70vw;
        border-top: 2px solid #f5f5f5;
      }
    }
    .containerInfos {
      width: 25%;
      display: flex;
      flex-direction: column;
      gap: 22px;

      @media screen and (max-width: 563px) {
        gap: 5px;
        width: 100vw;
        align-items: center;
      }

      .terms {
        display: flex;
        gap: 9px;
        align-items: center;

        svg {
          width: 30px;
          height: 30px;
        }

        a {
          text-decoration: none;
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          color: #ffffff;
        }
      }

      .protection {
        display: flex;
        gap: 9px;
        align-items: center;

        svg {
          width: 30px;
          height: 30px;
          color: #13f200;
        }

        p {
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          color: #ffffff;
        }
      }

      .iconsRedes {
        display: flex;
        gap: 21px;

        a {
          svg {
            width: 30px;
            height: 30px;
          }
        }

        .iconYt {
          background-color: red;
          color: #ffffff;
          border-radius: 50%;
          padding: 3px;
        }

        .iconInstagram {
          background: linear-gradient(0deg, #e09b3d, #c74c4d, #c21975, #7024c4);
          color: #ffffff;
          border-radius: 50%;
          padding: 3px;
        }

        .iconIn {
          background-color: #0077b7;
          color: #ffffff;
          border-radius: 50%;
          padding: 3px;
        }
        .iconPhone {
          background-color: #000;
          color: #ffffff;
          border-radius: 50%;
          padding: 5px;
        }
      }
    }
  }
  .copyright {
    display: flex;
    justify-content: center;
    margin-top: 23px;

    h3 {
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
      color: #0063cc;
    }
  }
`;

export const ListDevsStyled = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-top: 15px;

  @media screen and (max-width: 563px) {
    width: 100vw;
    align-items: center;
    margin-top: 0;
  }

  h4 {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    margin-bottom: 33px;
  }

  ul {
    li {
      display: flex;
      gap: 7px;

      svg {
        color: #13f200;
      }

      p {
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        color: #f5f5f5;
      }
    }
  }
`;
