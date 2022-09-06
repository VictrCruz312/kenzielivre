import { StatePageStyled } from "./style"

import { BsArrowRightSquare } from 'react-icons/bs';
import { BsArrowLeftSquare } from 'react-icons/bs';
import { useState } from "react";

interface IPropsStatePage {

    takePage:( page:number ) => void
}

const StatePage = ( {  takePage }:IPropsStatePage ) => {
    
    const [ page, setPage ] = useState<number>(1)

    const mais = () => {
        takePage(page + 1)
        setPage(page + 1)
    }

    const menos = () => {
        if(page > 1){
            takePage(page - 1)
            setPage(page - 1) 
        }
    }

    return(
        <StatePageStyled>
            <button onClick={menos} className="statePage__buttonLeft">
                <BsArrowLeftSquare/>
            </button>
            <button onClick={mais} className="statePage__buttonRigth">
                <BsArrowRightSquare/>
            </button>
        </StatePageStyled>
    )
}

export default StatePage