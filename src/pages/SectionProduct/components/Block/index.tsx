import { ReactNode } from "react"
import { BlockStyled } from "./style"

interface IPropsBlock {
    children:ReactNode
}

const Block = ( { children }:IPropsBlock ) => {

    return(
        <BlockStyled>
            { children }
        </BlockStyled>
    )
}

export default Block