import { ReactNode } from "react";
import { BoxStyled } from "./style";

interface IBoxProps {
  children?: ReactNode;
  width: string;
  minWidth?: string;
  background?: string;
  height?: string;
  backgroundMobile?: string;
  widthMobile?: string;
  display?: string;
  MediaQuery?: string;
}

const Box = ({
  children,
  width,
  widthMobile,
  background,
  height,
  backgroundMobile,
  minWidth,
  display,
  MediaQuery,
}: IBoxProps) => {
  // small: 39% medium: 61% large: 100%
  const valueWidth =
    width === "minSmall"
      ? "28%"
      : width === "small"
      ? "39%"
      : width === "medium"
      ? "61%"
      : width === "large"
      ? "100%"
      : width;

  const valueHeight =
    width === "minSmall"
      ? "28%"
      : height === "small"
      ? "39%"
      : height === "medium"
      ? "61%"
      : height === "large"
      ? "100%"
      : height;

  const VarMediaQuery = MediaQuery ? MediaQuery : "563px";
  return (
    <BoxStyled
      width={valueWidth}
      minWidth={minWidth}
      widthMobile={widthMobile}
      height={valueHeight}
      backgroundColor={background}
      backgroundMobile={backgroundMobile}
      display={display}
      MediaQuery={VarMediaQuery}
    >
      {children}
    </BoxStyled>
  );
};

export default Box;
