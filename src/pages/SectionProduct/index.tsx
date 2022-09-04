import Navigate from "./components/Navigate"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import TransitionPage from "../../components/TransitionPage"
import Block from "./components/Block"
import { SectionProductStyled } from "./style"
import Showcase from "./components/Showcase"
import { products } from "../Home/products"

const SectionProduct = () => {

    return(
        <TransitionPage>
            <SectionProductStyled>
                <Header
                    onText={( e)=>{}}
                />
                <Block>
                    <Navigate/>
                    <Showcase
                        arrayProduct={products}
                    />
                </Block>
                <Footer/>
            </SectionProductStyled>
        </TransitionPage>
    )
}
export default SectionProduct