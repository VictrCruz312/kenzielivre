import styled from "styled-components";

interface IBoxStyledProps {
  width: string;
  backgroundColor: string | undefined;
  height: string | undefined;
  backgroundMobile: string | undefined;
  widthMobile: string | undefined;
}

export const BoxStyled = styled.div<IBoxStyledProps>`
  display: flex;
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
      : `rgba(28, 27, 35, ${width === "100%" ? "0.60" : "0.85"})`};

  @media screen and (max-width: 563px) {
    background-color: ${({ backgroundMobile }) =>
      backgroundMobile ? backgroundMobile : "#3F3D56"};
    width: ${({ widthMobile }) => (widthMobile ? widthMobile : "90%")};
    padding: 40px 10px;
    margin: 10px auto;
    border-radius: 20px;
  }
`;
