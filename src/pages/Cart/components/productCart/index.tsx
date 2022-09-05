import { ProductCartStyled } from "./style";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

const ProductCart = () => {
  const listCart = [
    {
      img: undefined,
      nome: "T-shirt",
      codigo: "000001",
      amount: 2,
      price: 2937,
      color: "red",
    },
    {
      img: undefined,
      nome: "T-shirt",
      codigo: "000002",
      amount: 2,
      price: 2937,
      color: "red",
    },
    {
      img: undefined,
      nome: "T-shirt",
      codigo: "000003",
      amount: 2,
      price: 2937,
      color: "red",
    },
    {
      img: undefined,
      nome: "T-shirt",
      codigo: "000004",
      amount: 2,
      price: 2937,
      color: "red",
    },
  ];
  return (
    <ProductCartStyled>
      {listCart.map((product) => (
        <li className="product" key={product.codigo}>
          <div className="containerImg">
            <img src="./assets/background.svg" alt={product.nome} />
          </div>
          <div className="containerNameCorAmount">
            <div className="nameAndCor">
              <div className="containerNome">
                <p>{product.nome}</p>
                <span>código: {product.codigo}</span>
              </div>
              <div className="containerCor">
                <p>{product.color}</p>
              </div>
            </div>
            <div className="containerAmount">
              <p>{product.amount}</p>
              <div className="BtnsAmount">
                <button>
                  <AiOutlinePlus />
                </button>
                <button>
                  <AiOutlineMinus />
                </button>
              </div>
            </div>
          </div>
          <div className="containerPriceRemove">
            <div className="containerPrice">
              <p>R$ {product.price.toFixed(2)}</p>
            </div>
            <button className="containerRemove">
              <GrClose />
            </button>
          </div>
        </li>
      ))}
    </ProductCartStyled>
  );
};
export default ProductCart;
