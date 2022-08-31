import { ReactNode } from "react";
import { BoxStyled } from "./style";

interface IBoxProps {
  children?: ReactNode;
  width: string;
  minWidth?: string;
  background?: string | undefined;
  height?: string | undefined;
  backgroundMobile?: string | undefined;
  widthMobile?: string | undefined;
  display?: string;
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
}: IBoxProps) => {
  // small: 39% medium: 61% large: 100%
  const valueWidth =
    width === "small"
      ? "39%"
      : width === "medium"
      ? "61%"
      : width === "large"
      ? "100%"
      : width;

  const valueHeight =
    height === "small"
      ? "39%"
      : height === "medium"
      ? "61%"
      : height === "large"
      ? "100%"
      : height;
  return (
    <BoxStyled
      width={valueWidth}
      minWidth={minWidth}
      display={display}
      widthMobile={widthMobile}
      height={valueHeight}
      backgroundColor={background}
      backgroundMobile={backgroundMobile}
    >
      {children}
    </BoxStyled>
  );
};

export default Box;
