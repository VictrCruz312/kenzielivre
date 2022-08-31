import styled from "styled-components";

interface IBoxStyledProps {
  width: string;
  minWidth: string | undefined;
  backgroundColor: string | undefined;
  height: string | undefined;
  backgroundMobile: string | undefined;
  widthMobile: string | undefined;
  display: string | undefined;
}

export const BoxStyled = styled.div<IBoxStyledProps>`
  display: ${({ display }) => (display ? display : "flex")};
  flex-direction: column;
  align-items: center;
  width: ${({ width }) => width};
  max-width: ${({ width }) =>
    width === "28%"
      ? "405px"
      : width === "39%"
      ? "563px"
      : width === "61%"
      ? "873px"
      : "100%"};
  height: ${({ height }) => (height ? height : "inherit")};
  backdrop-filter: blur(20px);
  background-color: ${({ backgroundColor, width }) =>
    backgroundColor
      ? backgroundColor
      : `rgba(28, 27, 35, ${
          width === "100%" || width === "61%" ? "0.60" : "0.85"
        })`};

  @media screen and (max-width: 563px) {
    background-color: ${({ backgroundMobile }) =>
      backgroundMobile ? backgroundMobile : "#rgba(63, 61, 86, 0.2);"};
    width: ${({ widthMobile }) => (widthMobile ? widthMobile : "90%")};
    padding: 40px 10px;
    margin: 10px auto;
    border-radius: 20px;
    min-width: 0;
  }
`;
