import * as React from "react";
import Button from "@mui/material/Button";
import { Buttons } from "./style";

export interface IButton {
  type: "submit" | "button";
  background: "transp" | "deft" | "greey";
  size: "small" | "medium" | "large";
  children: string;
  onSubmit?: (props: any) => void;
}

//size => small (278px) / medium (320px) / large (452px)
//background => transp (button transparente) / deft (button padrão(blue)) / greenn (button cinza(btn do cart))

export const ButtonAll = ({
  type,
  background,
  children,
  size,
  onSubmit,
}: IButton) => {
  return (
    <Buttons
      type={type}
      background={background}
      size={size}
      onSubmit={onSubmit}
    >
      <Button type={type} size={size} onSubmit={onSubmit}>
        {children}
      </Button>
    </Buttons>
  );
};
