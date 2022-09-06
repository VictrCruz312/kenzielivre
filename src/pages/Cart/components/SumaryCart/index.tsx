import { ButtonAll } from "../../../../components/Button";
import { Sumarystyled } from "./style";
import { MdCheckCircleOutline, MdRadioButtonUnchecked } from "react-icons/md";
import { useCart } from "../../../../Context/Cart";

const SumaryCart = () => {
  const { navigation, cartRemove } = useCart();

  return (
    <Sumarystyled>
      <div className="containerCheck">
        <MdCheckCircleOutline className="checked" />
        <svg
          width="98"
          height="16"
          className="arrowOne"
          viewBox="0 0 98 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="arrowOne"
            d="M97.7071 8.70711C98.0976 8.31658 98.0976 7.68342 97.7071 7.29289L91.3431 0.928932C90.9526 0.538408 90.3195 0.538408 89.9289 0.928932C89.5384 1.31946 89.5384 1.95262 89.9289 2.34315L95.5858 8L89.9289 13.6569C89.5384 14.0474 89.5384 14.6805 89.9289 15.0711C90.3195 15.4616 90.9526 15.4616 91.3431 15.0711L97.7071 8.70711ZM0 9H97V7H0V9Z"
            fill="white"
          />
        </svg>
        <MdRadioButtonUnchecked className="notChecked" />
        <svg
          width="98"
          className="arrowTwo"
          height="16"
          viewBox="0 0 98 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="arrowTwo"
            d="M97.7071 8.70711C98.0976 8.31658 98.0976 7.68342 97.7071 7.29289L91.3431 0.928932C90.9526 0.538408 90.3195 0.538408 89.9289 0.928932C89.5384 1.31946 89.5384 1.95262 89.9289 2.34315L95.5858 8L89.9289 13.6569C89.5384 14.0474 89.5384 14.6805 89.9289 15.0711C90.3195 15.4616 90.9526 15.4616 91.3431 15.0711L97.7071 8.70711ZM0 9H97V7H0V9Z"
            fill="white"
          />
        </svg>
        <MdRadioButtonUnchecked className="notChecked" />
      </div>
      <h1 className="title">Carrinho de compras</h1>
      <h2 className="subtitle">Resumo</h2>
      <div className="containerSumary">
        <div className="lineSumary">
          <p>Sub total:</p>
          <p className="values">R$ {}</p>
        </div>
        <div className="lineSumary">
          <p>Taxa:</p>
          <p className="values">0</p>
        </div>
        <div className="lineSumary">
          <p>Desconto:</p>
          <p className="values">0</p>
        </div>
        <div className="lineSumaryTotal">
          <p className="totalName">Preço total:</p>
          <p className="totalValue">R$2999.0</p>
        </div>
      </div>
      <div className="buttons">
        <ButtonAll
          onCLick={() => navigation("/cart/checkout")}
          type="button"
          background="deft"
          size="large"
          children="Avançar para checkout"
        />
        <ButtonAll
          onCLick={() => cartRemove()}
          type="button"
          background="greey"
          size="large"
          children="Esvaziar carrinho"
        />
      </div>
    </Sumarystyled>
  );
};

export default SumaryCart;
