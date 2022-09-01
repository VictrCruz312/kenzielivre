import { ReactNode } from "react"
import { FormStyled } from "./style"

interface IPropsForm {
    name:string,
    children:ReactNode
}

const Form = ( { name, children }:IPropsForm ) => {

    return(
        <FormStyled>
            <h2 className="form__title">{name}</h2>
            {
                children
            }
        </FormStyled>
    )
}

export default Form