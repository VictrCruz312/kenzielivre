import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Box from "../../components/Box";
import { ButtonAll } from "../../components/Button";
import CardExtra from "../../components/cardExtra";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TransitionPage from "../../components/TransitionPage";
import { useRequest } from "../../Context/Request";

import { v4 as uuid } from "uuid";

import {
  ContainerProduct,
  DivImageProduct,
  ProductInfo,
  ProductStyle,
} from "./style";
import { useModal } from "../../Context/Modal";

const Product = () => {
  const navigate = useNavigate();

  const { leaveModalFunction } = useModal();
  useEffect(() => leaveModalFunction(), []);

  const { SearchProductId, deleteProduct } = useRequest();
  const { id } = useParams();

  const [product, setProduct] = useState<any>();
  const [imageMain, setImageMain] = useState<string>("");

  useEffect(() => {
    leaveModalFunction();

    SearchProductId(Number(id))
      .then((result) => {
        setProduct(result);
        // @ts-ignore ou // @ts-expect-error
        setImageMain(result?.images[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  const user = JSON.parse(localStorage.getItem("@KenzieLivre:User") as string);

  const addCart = () => {
    const arrayCart = JSON.parse(
      localStorage.getItem("@KenzieLivre:Cart") as string
    );

    let existe = false;

    const productCart = arrayCart.map((productCart: any) => {
      if (productCart.id == product.id) {
        productCart.productQuantity++;

        existe = true;

        return productCart;
      }

      return productCart;
    });

    if (!existe) {
      product.productQuantity = 1;

      productCart.push(product);
    }

    toast.success("Adicionado ao carrinho")

    localStorage.setItem("@KenzieLivre:Cart", JSON.stringify(productCart));
  };

  const addGoCart = () => {
    addCart();
    navigate("/cart");
  };

  const deleteProductFunction = () => {
    deleteProduct(product.id)
      .then((res) => {
        toast.success("Produto deletado");
        navigate("/home");
      })
      .catch((err) => toast.error("Erro ao deletar o produto"));
  };

  return (
    <TransitionPage>
      <ProductStyle>
        <Header onText={() => {}} />
        <ContainerProduct>
          <DivImageProduct>
            <div className="miniImage">
              {product?.images?.map((image: any) => (
                <CardExtra
                  key={uuid()}
                  type="imgExtraProduct"
                  alt={product.model}
                  src={image}
                  takeImage={(img) => setImageMain(img)}
                />
              ))}
            </div>
            <div className="mainImage">
              <img
                src={imageMain && imageMain}
                alt={product && product?.model}
              />
            </div>
          </DivImageProduct>
          <Box width="615px" MediaQuery="1133px">
            <ProductInfo>
              <div className="topInfo">
                <p className="newProduct">Novo</p>
                <h2 className="titleProduct">
                  {product && (product?.description) }
                </h2>
                <p className="priceProduct">
                  R$ {product && Number(product?.currentPrice).toFixed(2) }
                </p>
                <p className="stockProduct">
                  {product && product?.quantity > 0
                    ? "Estoque disponivel"
                    : "Estoque indisponivel"}
                </p>
                <p className="quantityProduct">
                  Quantidade: <p> {product && product?.quantity} unidade</p>
                </p>
              </div>
              <div className="buttonsProduct">
                <ButtonAll
                  onCLick={addGoCart}
                  background="deft"
                  size="medium"
                  children="Comprar"
                  type="submit"
                />
                <ButtonAll
                  onCLick={addCart}
                  background="transp"
                  size="medium"
                  children="Adicionar ao carrinho"
                  type="submit"
                />
                {product?.userId === user?.id && (
                  <ButtonAll
                    onCLick={() => navigate(`/updateProduct/${product.id}`)}
                    background="transp"
                    size="medium"
                    children="Atualizar Produto"
                    type="submit"
                  />
                )}
                {product?.userId === user?.id && (
                  <ButtonAll
                    onCLick={deleteProductFunction}
                    background="transp"
                    size="medium"
                    children="Excluir Produto"
                    type="submit"
                  />
                )}
              </div>
              <div className="technicalProduct">
                <h2 className="heTechnical">Características</h2>
                <div className="tableTechnical">
                  <table>
                    <tr>
                      <th className="thDark">Marca</th>
                      <td className="tdDark">{product && product?.brand}</td>
                    </tr>
                    <tr>
                      <th className="thLight">Modelo</th>
                      <td className="tdLight">{product && product?.model}</td>
                    </tr>
                    <tr>
                      <th className="thDark">Cor</th>
                      <td className="tdDark">{product && product?.color}</td>
                    </tr>
                    <tr>
                      <th className="thLight">Garantia</th>
                      <td className="tdLight">
                        {product && product?.warranty}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </ProductInfo>
          </Box>
        </ContainerProduct>
      </ProductStyle>
      <Footer />
    </TransitionPage>
  );
};
export default Product;
