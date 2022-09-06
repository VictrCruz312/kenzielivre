import { ProductCartStyled } from "./style";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { IProductCart, useCart } from "../../../../Context/Cart";

const ProductCart = () => {
  const { listCart, removeProduct, plusQuantity, minusQuantity } = useCart();

  return (
    <ProductCartStyled>
      {listCart.length > 0 ? (
        listCart.map((product: IProductCart) => (
          <li className="product" key={product.id}>
            <div className="containerImg">
              <img src={product.images[1]} alt={product.brand} />
            </div>
            <div className="containerNameCorAmount">
              <div className="nameAndCor">
                <div className="containerNome">
                  <p>{product.brand}</p>
                  <span>código: {product.id}</span>
                </div>
                <div className="containerCor">
                  <p>{product.color}</p>
                </div>
              </div>
              <div className="containerAmount">
                <p>{product.productQuantity}</p>
                <div className="BtnsAmount">
                  <button onClick={() => plusQuantity(product.id)}>
                    <AiOutlinePlus />
                  </button>
                  <button onClick={() => minusQuantity(product.id)}>
                    <AiOutlineMinus />
                  </button>
                </div>
              </div>
            </div>
            <div className="containerPriceRemove">
              <div className="containerPrice">
                <p>
                  R${" "}
                  {product.promotion ? product.currentPrice : product.lastPrice}
                </p>
              </div>
              <button
                onClick={() => removeProduct(product.id)}
                className="containerRemove"
              >
                <GrClose />
              </button>
            </div>
          </li>
        ))
      ) : (
        <span>carrinho vazio</span>
      )}
    </ProductCartStyled>
  );
};
export default ProductCart;
