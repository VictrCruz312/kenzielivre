import styled from "styled-components";
import { IButton } from "./index";

type IUserRegister = Omit<IButton, "children">;

export const Buttons = styled.div<IUserRegister>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16.3%;
  min-height: 48px;
  max-height: 59px;

  Button {
    margin: 8px 0 4px 0;

    width: ${(props) =>
      (props.size === "small" && `${280}px`) || //setado ja
      (props.size === "medium" && "24.66%") ||
      (props.size === "large" && "34.83%")};
    min-width: ${(props) =>
      (props.size === "small" && `${280}px`) || //setado ja
      (props.size === "medium" && `${280}px`) ||
      (props.size === "large" && `${280}px`)};
    max-width: ${(props) =>
      (props.size === "small" && `${280}px`) || //setado ja
      (props.size === "medium" && `${320}px`) ||
      (props.size === "large" && `${452}px`)};

    height: ${(props) =>
      (props.size === "small" && `${48}px`) ||
      (props.size === "medium" && `${48}px`) ||
      (props.size === "large" && "100%")};
    min-height: ${(props) =>
      (props.size === "small" && `${48}px`) ||
      (props.size === "medium" && `${48}px`) ||
      (props.size === "large" && `${48}px`)};
    max-height: ${(props) =>
      (props.size === "small" && `${48}px`) ||
      (props.size === "medium" && `${48}px`) ||
      (props.size === "large" && `${59}px`)};

    font-size: ${(props) =>
      (props.size === "small" && `${16}px`) ||
      (props.size === "medium" && `${16}px`) ||
      (props.size === "large" && `${18}px`)};

    background-color: ${(props) =>
      (props.background === "deft" && "#0063CC") ||
      (props.background === "transp" && "#02020200") ||
      (props.background === "greey" && "#7A7A7A")};
    color: ${(props) =>
      (props.background === "deft" && "#F5F5F5") ||
      (props.background === "transp" && "#0063CC") ||
      (props.background === "greey" && "#F5F5F5")};

    border: ${(props) =>
      (props.background === "deft" && "none") ||
      (props.background === "transp" && `${2}px solid #0063CC`) ||
      (props.background === "greey" && "none")};

    font-family: "Roboto", sans-serif;
    font-weight: 500;

    &:hover {
      background-color: ${(props) =>
        (props.background === "deft" && "#1976D2") ||
        (props.background === "transp" && "#0202020a") ||
        (props.background === "greey" && "#6a6a6a")};
    }
  }
`;
