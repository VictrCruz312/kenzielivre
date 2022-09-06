import { IEnvioEndereco } from "../../index";
import { ButtonAll } from "../../../../components/Button";
import { ContainerCartFinal } from "./style";

const DetailCartFinal = () => {
  return (
    <ContainerCartFinal>
      <h2>Finalizar compra</h2>

      <div className="detail">
        <div className="secaoCartDesconto">
          <p className="desconto">Desconto</p>
          <p className="valorDesconto">R$ 2999.0</p>
        </div>
        <div className="division"></div>
        <div className="secaoCartTotal">
          <p className="total">Total a pagar</p>
          <p className="valorTotal">R$ 2999.0</p>
        </div>
      </div>

      <div className="containerButtons">
        <ButtonAll type="submit" background="deft" size="large">
          Finalizar compra
        </ButtonAll>
        <ButtonAll type="button" background="greey" size="large">
          Voltar
        </ButtonAll>
      </div>
    </ContainerCartFinal>
  );
};

export default DetailCartFinal;
