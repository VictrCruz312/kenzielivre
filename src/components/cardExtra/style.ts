import styled from "styled-components";
import { ICardExtra } from "./index";

export const ContainerCard = styled.div<ICardExtra>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  background-color: #3f3d56;

  width: ${(props) =>
    (props.type === "cardLogoEmpresa" && `${200}px`) ||
    (props.type === "imgExtraProduct" && `${148}px`)};
  min-width: ${(props) =>
    (props.type === "cardLogoEmpresa" && `${200}px`) ||
    (props.type === "imgExtraProduct" && `${148}px`)};
  max-width: ${(props) =>
    (props.type === "cardLogoEmpresa" && `${200}px`) ||
    (props.type === "imgExtraProduct" && `${148}px`)};

  height: ${(props) =>
    (props.type === "cardLogoEmpresa" && `${200}px`) ||
    (props.type === "imgExtraProduct" && `${148}px`)};

  min-height: ${(props) =>
    (props.type === "cardLogoEmpresa" && `${200}px`) ||
    (props.type === "imgExtraProduct" && `${148}px`)};

  max-height: ${(props) =>
    (props.type === "cardLogoEmpresa" && `${200}px`) ||
    (props.type === "imgExtraProduct" && `${148}px`)};

  children {
    min-width: ${(props) =>
      (props.type === "cardLogoEmpresa" && `${80}px`) ||
      (props.type === "imgExtraProduct" && "85%")};
    max-width: ${(props) =>
      (props.type === "cardLogoEmpresa" && `${80}px`) ||
      (props.type === "imgExtraProduct" && "85%")};
    min-height: ${(props) =>
      (props.type === "cardLogoEmpresa" && `${200}px`) ||
      (props.type === "imgExtraProduct" && "85%")};

    max-height: ${(props) =>
      (props.type === "cardLogoEmpresa" && `${200}px`) ||
      (props.type === "imgExtraProduct" && "95%")};
  }
`;
