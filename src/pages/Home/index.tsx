import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TransitionPage from "../../components/TransitionPage";
import Block from "./components/Block";

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

        </Block>
        <Footer/>
      </HomeStyled>
    </TransitionPage>
  );
};
export default Home;
