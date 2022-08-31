import Header from "../../components/Header"
import TransitionPage from "../../components/TransitionPage"
import { HomeStyled } from "./style"



const Home = () => {

    return(
        <TransitionPage>
            <HomeStyled>
                <Header onText={( text ) =>{ console.log( text )}}/>
            </HomeStyled>
        </TransitionPage>
    )
}
export default Home