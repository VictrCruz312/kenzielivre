import { ReactNode } from "react";
import { ContainerCard } from "./style";

export interface ICardExtra {
  type: "imgExtraProduct" | "cardLogoEmpresa";
  children: ReactNode;
}

//2 tipos de tamanho
//type= imgExtraProduct -> só para imagens secundarias do produto (/home)
//type= cardLogoEmpresa -> imagem apenas das logos das empresas (/product)

const CardExtra = ({ type, children }: ICardExtra) => {
  return <ContainerCard type={type}>{children}</ContainerCard>;
};

export default CardExtra;
