import { useEffect, useState } from "react";
import { MdCheckCircleOutline, MdRadioButtonUnchecked } from "react-icons/md";
import { ButtonAll } from "../../../../components/Button";
import TransitionPage from "../../../../components/TransitionPage";
import Cartao from "../Cartao";
import Pix from "../Pix";
import { CheckoutStyled } from "./style";

const Checkout = () => {
  const [payment, setPayment] = useState<string>("cartao");

  return (
    <TransitionPage>
      <CheckoutStyled>
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
        <h1 className="title">checkout</h1>
        <h2 className="subtitle">Métodos de pagamento</h2>
        <div className="containerPayments">
          <div className="checkbox">
            <input
              name="paymentType"
              onChange={() => setPayment("cartao")}
              id="credito"
              type="radio"
              defaultChecked={payment === "pix" ? false : true}
            />
            <label htmlFor="credito">Cartão de credito</label>
          </div>
          <div className="checkbox">
            <input
              name="paymentType"
              onChange={() => setPayment("pix")}
              id="pix"
              type="radio"
            />
            <label htmlFor="pix">Pix</label>
          </div>
          <div>
            {payment === "pix" ? (
              <Pix />
            ) : payment === "cartao" ? (
              <Cartao />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="buttons">
          <ButtonAll type="button" size="large" background="deft">
            Avançar para finalização
          </ButtonAll>
          <ButtonAll type="button" size="large" background="greey">
            Voltar
          </ButtonAll>
        </div>
      </CheckoutStyled>
    </TransitionPage>
  );
};
export default Checkout;
