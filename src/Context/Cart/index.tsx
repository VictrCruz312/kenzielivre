import { createContext, ReactNode, useContext, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ICartaoForm } from "../../pages/Cart/components/Cartao";

interface IContextCart {
  removeProduct: (idProduct: number) => void;
  listCart: IProductCart[];
  navigation: NavigateFunction;
  cartRemove: () => void;
  totalCart: () => number;
  setListCart: React.Dispatch<React.SetStateAction<IProductCart[]>>;
  saveCartao: (data: ICartaoForm) => void;
  cartao: ICartaoForm | {};
}

interface IPropsCart {
  children: ReactNode;
}

interface IProductCart {
  brand: string;
  category: string;
  color: string;
  currentPrice: number;
  description: string;
  id: number;
  images: Array<string>;
  lastPrice: number;
  model: string;
  promotion: Boolean;
  quantity: number;
  userId: number;
  warranty: string;
}

const CartContext = createContext<IContextCart>({} as IContextCart);

export const CartProvider = ({ children }: IPropsCart) => {
  const [listCart, setListCart] = useState<Array<IProductCart>>(
    JSON.parse(localStorage.getItem("@KenzieLivre:Cart") as string)
  );
  const [cartao, setCartao] = useState<ICartaoForm | {}>({});

  const removeProduct = (idProduct: number) => {
    const newList = listCart.filter((product) => product.id !== idProduct);
    setListCart(newList);
    localStorage.setItem("@KenzieLivre:Cart", JSON.stringify(newList));
  };

  const navigation = useNavigate();

  const cartRemove = () => {
    localStorage.setItem("@KenzieLivre:Cart", JSON.stringify([]));
    setListCart([]);
  };

  const totalCart = () => {
    return listCart.reduce((value, product) => {
      let price = "";
      product.promotion
        ? (price += product.currentPrice)
        : (price += product.lastPrice);
      return parseInt(price) + value;
    }, 0);
  };

  const saveCartao = (cartao: ICartaoForm) => {
    setCartao(cartao);
  };

  return (
    <CartContext.Provider
      value={{
        removeProduct,
        listCart,
        navigation,
        cartRemove,
        totalCart,
        setListCart,
        cartao,
        saveCartao,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
