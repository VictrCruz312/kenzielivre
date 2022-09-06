import { StatePageStyled } from "./style"

import { BsArrowRightSquare } from 'react-icons/bs';
import { BsArrowLeftSquare } from 'react-icons/bs';

interface IPropsStatePage {
    setPage: React.Dispatch<React.SetStateAction<number>>
}

const StatePage = ( { setPage }:IPropsStatePage ) => {

    return(
        <StatePageStyled>
            <button onClick={()=>setPage(( page ) => page - 1)} className="statePage__buttonLeft">
                <BsArrowLeftSquare/>
            </button>
            <button onClick={()=>setPage(( page ) => page + 1)} className="statePage__buttonRigth">
                <BsArrowRightSquare/>
            </button>
        </StatePageStyled>
    )
}

export default StatePage