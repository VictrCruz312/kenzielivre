import { createContext, ReactNode, useContext, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface IContextCart {
  removeProduct: (idProduct: number) => void;
  listCart: IProductCart[];
  navigation: NavigateFunction;
  cartRemove: () => void;
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

  return (
    <CartContext.Provider
      value={{ removeProduct, listCart, navigation, cartRemove }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
