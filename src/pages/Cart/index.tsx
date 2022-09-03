import { NavigateFunction, useNavigate } from "react-router-dom";
import Box from "../../components/Box";
import Header from "../../components/Header";
import TransitionPage from "../../components/TransitionPage";
import ProductCart from "./components/productCart";
import SumaryCart from "./components/SumaryCart";
import { CartStyled } from "./style";

const Cart = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <TransitionPage>
      <CartStyled>
        <Header
          onCart={() => navigate("/cart")}
          onModal={() => navigate("/cart")}
          onText={() => "teste"}
        />
        <div className="mainCart">
          <Box width="large">
            <ProductCart />
          </Box>
          <Box width="small" minWidth="563px" height="100%">
            <SumaryCart />
          </Box>
        </div>
      </CartStyled>
    </TransitionPage>
  );
};
export default Cart;
