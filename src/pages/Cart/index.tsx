import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import Box from "../../components/Box";
import Header from "../../components/Header";
import TransitionPage from "../../components/TransitionPage";
import { useCart } from "../../Context/Cart";
import { useModal } from "../../Context/Modal";
import ProductCart from "./components/productCart";
import SumaryCart from "./components/SumaryCart";
import { CartStyled } from "./style";

const Cart = () => {
  const { leaveModalFunction } = useModal();
  useEffect(() => {
    leaveModalFunction();
  }, []);
  
  const { checkout } = useParams();
  const { setListCart, cartRemove, setPix } = useCart();
  useEffect(() => {
    cartRemove()
    setPix(false)
    setListCart(
      JSON.parse(localStorage.getItem("@KenzieLivre:Cart") as string)
    );
  }, []);
  return (
    <TransitionPage>
      <CartStyled>
        <Header onText={() => "teste"} />
        <div className="mainCart">
          <div className="containerBoxLarge">
            <Box width="large" MediaQuery="1024px" backgroundMobile="#1C1B23">
              <ProductCart />
            </Box>
          </div>
          <div className="containerBox">
            <Box
              width="small"
              minWidth="563px"
              height="100%"
              MediaQuery="1024px"
            >
              {checkout === "checkout" ? <Outlet /> : <SumaryCart />}
            </Box>
          </div>
        </div>
      </CartStyled>
    </TransitionPage>
  );
};
export default Cart;
