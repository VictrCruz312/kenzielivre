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
          onCart={( e)=>{}}
          onModal={( e)=>{}}
          onText={( e)=>{}}
        />
        <Block>
          <Banner/>
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
