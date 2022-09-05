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
import StatePage from "./components/statePage"
import toast from "react-hot-toast"

const SectionProduct = () => {

    const { TakeProductPerPage } = useRequest()

    const [ page, setPage ] = useState(2)
    const [ products, setProducts ] = useState<IProduct[]>()

    useEffect(()=>{

        TakeProductPerPage( page )
            .then( product => {

                console.log( page )

                console.log( product.length > 0 )

                if(product.length > 0){
                    setProducts( product )
                }else{

                    toast("sem mais páginas")
                }
            } )
            .catch( error => console.log( error ) )

    },[page])

    return(
        <TransitionPage>
            <SectionProductStyled>
                <Header
                    onText={( e )=>{}}
                />
                <Block>
                    <Navigate/>
                    <Showcase
                        arrayProduct={products}
                    />
                </Block>
                <StatePage
                    setPage={setPage}    
                />
                <Footer/>
            </SectionProductStyled>
        </TransitionPage>
    )
}
export default SectionProduct