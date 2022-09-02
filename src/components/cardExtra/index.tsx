import { ReactNode } from "react";
import { ContainerCard, ContainerImagem } from "./style";

export interface ICardExtra {
  type: "imgExtraProduct" | "cardLogoEmpresa";
  src: string;
  alt: string;
}

//2 tipos de tamanho
//type= imgExtraProduct -> só para imagens secundarias do produto (/home)
//type= cardLogoEmpresa -> imagem apenas das logos das empresas (/product)

const CardExtra = ({ type, src, alt }: ICardExtra) => {
  return (
    <ContainerCard type={type} src={src} alt={alt}>
      <ContainerImagem type={type} src={src} alt={alt}>
        <img src={src} alt={alt} />
      </ContainerImagem>
    </ContainerCard>
  );
};

export default CardExtra;
