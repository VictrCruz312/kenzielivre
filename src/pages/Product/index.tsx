import Box from "../../components/Box";
import { ButtonAll } from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TransitionPage from "../../components/TransitionPage";
import {
  ContainerProduct,
  DivImageProduct,
  ProductInfo,
  ProductStyle,
} from "./style";

const Product = () => {
  return (
    <TransitionPage>
      <ProductStyle>
        <Header onText={() => {}} />
        <ContainerProduct>
          <DivImageProduct>
            <div className="miniImage">
              <div className="borderImage">
                <img
                  src="https://www.fastshop.com.br//wcsstore/FastShopCAS/images/catalog/AEMLL63BZAGFT_PRD/AEMLL63BZAGFT_PRD_447_4.jpeg"
                  alt=""
                />
              </div>
              <div className="borderImage">
                <img
                  src="https://www.fastshop.com.br//wcsstore/FastShopCAS/images/catalog/AEMLL63BZAGFT_PRD/AEMLL63BZAGFT_PRD_447_5.jpeg"
                  alt=""
                />
              </div>
              <div className="borderImage">
                <img
                  src="https://www.fastshop.com.br//wcsstore/FastShopCAS/images/catalog/AEMLL63BZAGFT_PRD/AEMLL63BZAGFT_PRD_447_3.jpeg"
                  alt=""
                />
              </div>
            </div>
            <div className="mainImage">
              <img
                src="https://www.fastshop.com.br//wcsstore/FastShopCAS/images/catalog/AEMLL63BZAGFT_PRD/AEMLL63BZAGFT_PRD_447_1.jpeg"
                alt=""
              />
            </div>
          </DivImageProduct>
          <Box width="615px" MediaQuery="768px">
            <ProductInfo>
              <div className="topInfo">
                <p className="newProduct">Novo</p>
                <h2 className="titleProduct">
                  iPhone 13 Pro Max Apple (128GB) Grafite, Tela de 6,7?, 5G e
                  Câmera Pro de 12 MP
                </h2>
                <p className="priceProduct">R$ 7090,00</p>
                <p className="stockProduct">Estoque disponivel</p>
                <p className="quantityProduct">
                  Quantidade: <p> 1 unidade</p>
                </p>
              </div>
              <div className="buttonsProduct">
                <ButtonAll
                  background="deft"
                  size="small"
                  children="Comprar"
                  type="submit"
                />
                <ButtonAll
                  background="transp"
                  size="small"
                  children="Adicionar ao carrinho"
                  type="submit"
                />
              </div>
              <div className="technicalProduct">
                <h2 className="heTechnical">Características</h2>
                <div className="tableTechnical">
                  <table>
                    <tr>
                      <th className="thDark">Marca</th>
                      <td className="tdDark">Apple</td>
                    </tr>
                    <tr>
                      <th className="thLight">Modelo</th>
                      <td className="tdLight">iPhone 13 Pro Max</td>
                    </tr>
                    <tr>
                      <th className="thDark">Cor</th>
                      <td className="tdDark">Grafite</td>
                    </tr>
                    <tr>
                      <th className="thLight">Garantia</th>
                      <td className="tdLight">1 Ano</td>
                    </tr>
                  </table>
                </div>
              </div>
            </ProductInfo>
          </Box>
        </ContainerProduct>
      </ProductStyle>
      <div></div>
      <Footer />
    </TransitionPage>
  );
};
export default Product;
