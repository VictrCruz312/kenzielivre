import { ButtonAll } from "../../../../components/Button";
import { ContainerCartFinal } from "./style";
import { useCart } from "../../../../Context/Cart";

const DetailCartFinal = () => {
  const { totalCart } = useCart();

  return (
    <ContainerCartFinal>
      <h2>Finalizar compra</h2>

      <div className="detail">
        <div className="secaoCartDesconto">
          <p className="desconto">Desconto</p>
          <p className="valorDesconto">R$ 0</p>
        </div>
        <div className="division"></div>
        <div className="secaoCartTotal">
          <p className="total">Total a pagar</p>
          <p className="valorTotal">R$ {totalCart()}</p>
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
