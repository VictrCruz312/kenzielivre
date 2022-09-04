import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TransitionPage from "../../components/TransitionPage";
import Banner from "./components/Banner";
import Block from "./components/Block";
import CarouselProduct from "./components/CarouselProduct";
import Category from "./components/Category";
import { arrayLogo } from "./logo";
import { products } from "./products";

import { HomeStyled } from "./style";

const Home = () => {

  return (
    <TransitionPage>
      <HomeStyled>
        <Header
          onText={( e)=>{}}
        />
        <Block>
          <Banner
            arrayImage={[
              "https://img.freepik.com/psd-premium/banner-de-midia-social-do-instagram-black-friday-para-produtos-eletronicos-em-ofertas_220664-1933.jpg?w=2000",
              "https://img.freepik.com/psd-premium/faixa-de-midia-social-negra-sexta-feira-de-produtos-eletronicos-em-ofertas_220664-1867.jpg?w=2000"
          ]}
            delay={10000}
          />
          <Category name="Ofertas da semana"/>
          <CarouselProduct 
            arrayDados={products}
            type="Product"  
          />
          <Category name="Lojas cadastradas"/>
          <CarouselProduct 
            arrayDados={arrayLogo}
            type="Logo"  
          />
        </Block>
        <Footer/>
      </HomeStyled>
    </TransitionPage>
  );
};
export default Home;
