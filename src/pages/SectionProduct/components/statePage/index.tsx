import { StatePageStyled } from "./style"

import { BsArrowRightSquare } from 'react-icons/bs';
import { BsArrowLeftSquare } from 'react-icons/bs';
import { useState } from "react";
import { useAuthSearch } from "../../../../Context/authProductSearch";
import { useRequest } from "../../../../Context/Request";

interface IPropsStatePage {

    takePage:( page:number ) => void
}

const StatePage = ( { takePage }:IPropsStatePage ) => {
    
    const { 
        productFilter, 
        products, 
        filter, 
        takeFilter, 
        page, 
        setPage, 
        pageFilter, 
        setPageFilter 
    } = useAuthSearch()


    const mais = () => {

        console.log( pageFilter, page)

        if( productFilter?.length != 0 && productFilter?.length === 10 ){
            takeFilter(pageFilter + 1)
            setPageFilter(pageFilter + 1)
            // @ts-ignore ou // @ts-expect-error
        }
        if( productFilter?.length == 0 && products?.length === 10  ){
            takePage(page + 1)
            setPage(page + 1)
        }
    }

    const menos = () => {

        console.log( pageFilter, page)

        if(pageFilter > 1 && productFilter.length != 0 ){
            takeFilter(pageFilter - 1)
            setPageFilter(pageFilter - 1)
        }else if( page > 1 ){
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