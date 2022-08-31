import * as React from "react";
import Button from "@mui/material/Button";
import { Buttons } from "./style";

export interface IButton {
  background: "transp" | "deft" | "greey";
  size: "small" | "medium" | "large";
  children: string;
}

//size => small (278px) / medium (320px) / large (452px)
//background => transp (button transparente) / deft (button padrão(blue)) / greenn (button cinza(btn do cart))

export const ButtonAll = ({ background, children, size }: IButton) => {
  return (
    <Buttons background={background} size={size}>
      <Button size={size}>{children}</Button>
    </Buttons>
  );
};
