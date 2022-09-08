import { ReactNode } from "react";
import { ContainerCard, ContainerImagem } from "./style";

export interface ICardExtra {
  type: "imgExtraProduct" | "cardLogoEmpresa";
  src: string;
  alt: string;
  takeImage?:( img:string ) => void
}

//2 tipos de tamanho
//type= imgExtraProduct -> só para imagens secundarias do produto (/home)
//type= cardLogoEmpresa -> imagem apenas das logos das empresas (/product)



const CardExtra = ({ type, src, alt, takeImage }: ICardExtra) => {

  return (
    <ContainerCard type={type} src={src} alt={alt}>
      <ContainerImagem type={type} src={src} alt={alt}>
        <img onClick={( e )=>takeImage&&takeImage( e.currentTarget.src )} src={src} alt={alt} />
      </ContainerImagem>
    </ContainerCard>
  );
};

export default CardExtra;
