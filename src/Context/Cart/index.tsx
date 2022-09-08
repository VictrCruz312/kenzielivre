import { createContext, ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";
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
  plusQuantity: (id: number) => void;
  minusQuantity: (id: number) => void;
  setPix: (value: boolean) => void;
  pix: boolean;
}

interface IPropsCart {
  children: ReactNode;
}

export interface IProductCart {
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
  productQuantity: number;
}

const CartContext = createContext<IContextCart>({} as IContextCart);

export const CartProvider = ({ children }: IPropsCart) => {
  const [listCart, setListCart] = useState<Array<IProductCart>>([]);
  const [cartao, setCartao] = useState<ICartaoForm | {}>({});
  const [pix, setPix] = useState<boolean>(false);

  const removeProduct = (idProduct: number) => {
    const toastId = toast.loading("deletando");

    const newList = listCart.filter((product) => product.id !== idProduct);
    setListCart(newList);
    localStorage.setItem("@KenzieLivre:Cart", JSON.stringify(newList));

    toast.success("produto deletado", {
      id: toastId,
    });
  };

  const navigation = useNavigate();

  const cartRemove = () => {
    const toastId = toast.loading("limpando carrinho");
    localStorage.setItem("@KenzieLivre:Cart", JSON.stringify([]));
    setListCart([]);
    toast.success("carrinho vazio", {
      id: toastId,
    });
  };

  const totalCart = () => {
    return listCart.reduce((value, product) => {
      let price = "";
      product.promotion
        ? (price += Number( product.currentPrice ))
        : (price += Number( product.currentPrice ));
      return parseInt(price) * product.productQuantity + value;
    }, 0);
  };

  const saveCartao = (cartao: ICartaoForm) => {
    setCartao(cartao);
  };

  const plusQuantity = (id: number) => {
    const toastId = toast.loading("adicionando");

    const newList = listCart.map((product) => {
      const quantity = "" + product.quantity;
      if (parseInt(quantity) === product.productQuantity) {
        return product;
      } else if (product.id === id) {
        product.productQuantity += 1;
        return product;
      } else {
        return product;
      }
    });
    setListCart(newList);
    localStorage.setItem("@KenzieLivre:Cart", JSON.stringify(newList));
    toast.success("+1 produto adicionado", {
      id: toastId,
    });
  };

  const minusQuantity = (id: number) => {
    const toastId = toast.loading("removendo");
    const newList = listCart.map((product) => {
      if (product.id === id) {
        if (product.productQuantity < 1) {
          return product;
        } else {
          product.productQuantity -= 1;
        }
        return product;
      } else {
        return product;
      }
    });
    setListCart(newList);
    localStorage.setItem("@KenzieLivre:Cart", JSON.stringify(newList));
    toast.success("1 produto removido", {
      id: toastId,
    });
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
        plusQuantity,
        minusQuantity,
        setPix,
        pix,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
