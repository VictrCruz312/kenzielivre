import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TransitionPage from "../../components/TransitionPage";
import { useRequest } from "../../Context/Request";
import { IProduct } from "./components/CarouselProduct";
import { IUserReturn } from "../../services/interface/User";
import Banner from "./components/Banner";
import Block from "./components/Block";
import CarouselProduct from "./components/CarouselProduct";
import Category from "./components/Category";

import { HomeStyled } from "./style";
import { useAuth } from "../../Context/auth";

const Home = () => {

  const { checkAuth, checkLevelAuth } = useAuth()

  useEffect(()=>{ checkAuth(); checkLevelAuth() },[])

  const { TakePromotionProduct, takeUsers } = useRequest()

  const [ promotionProduct, setPromotionProduct ] = useState<IProduct[]>()
  const [ imagelogo, setImageLogo ] = useState<IUserReturn[]>()

  useEffect(()=>{

    TakePromotionProduct()
      .then( products => setPromotionProduct( products ) )
      .catch( error => console.log( error ) )

      takeUsers()
      .then( users => setImageLogo( users ) )
      .catch( error => console.log( error ) )


  },[])
  
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
            arrayDados={promotionProduct}
            type="Product"  
          />
          <Category name="Lojas cadastradas"/>
          <CarouselProduct 
            arrayDados={imagelogo}
            type="Logo"  
          />
        </Block>
        <Footer/>
      </HomeStyled>
    </TransitionPage>
  );
};
export default Home;
