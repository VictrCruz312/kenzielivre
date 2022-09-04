import Navigate from "./components/Navigate"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import TransitionPage from "../../components/TransitionPage"
import Block from "./components/Block"
import { SectionProductStyled } from "./style"
import Showcase from "./components/Showcase"
import { useEffect, useState } from "react"
import { useRequest } from "../../Context/Request"
import { IProduct } from "../Home/components/CarouselProduct"

const SectionProduct = () => {

    const { TakeProductPerPage } = useRequest()

    const [ products, setProducts ] = useState<IProduct[]>()

    useEffect(()=>{

        TakeProductPerPage( 1 )
            .then( product => setProducts( product ) )
            .catch( error => console.log( error ) )

    },[])

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