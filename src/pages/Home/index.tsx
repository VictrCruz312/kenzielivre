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
import { useModal } from "../../Context/Modal";

const Home = () => {
  
  if( !JSON.parse(localStorage.getItem("@KenzieLivre:Cart") as string) ){
    localStorage.setItem( "@KenzieLivre:Cart", JSON.stringify( [] ) )
  }

  const { checkAuth, checkLevelAuth } = useAuth()
  const { leaveModalFunction } = useModal()

  useEffect(()=>{ checkAuth(); checkLevelAuth(); leaveModalFunction() },[])

  const { TakePromotionProduct, takeUsers } = useRequest()

  const [ promotionProduct, setPromotionProduct ] = useState<IProduct[]>()
  const [ imagelogo, setImageLogo ] = useState<IUserReturn[]>()

  useEffect(()=>{

    TakePromotionProduct()
      .then( products => setPromotionProduct( products ) )
      .catch( error => console.log( error ) )

      takeUsers()
      .then( users => setImageLogo( users.filter( user => user.imageLogo ) ) )
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
              "https://http2.mlstatic.com/D_NQ_613450-MLA51443136055_092022-OO.webp",
              "https://http2.mlstatic.com/D_NQ_670369-MLA51444529319_092022-OO.webp",
              "https://http2.mlstatic.com/D_NQ_790935-MLA51428930314_092022-OO.webp",
              "https://http2.mlstatic.com/D_NQ_636640-MLA51442935581_092022-OO.webp",
              "https://http2.mlstatic.com/D_NQ_717370-MLA51442498686_092022-OO.webp"
          ]}
            delay={15000}
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
