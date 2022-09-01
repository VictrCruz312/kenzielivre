import { ReactNode } from "react"
import { FormStyled } from "./style"

interface IPropsForm {
    name:string,
    children:ReactNode
    onSubmit?:any
}

const Form = ( { name, children, onSubmit }:IPropsForm ) => {

    return(
        <FormStyled onSubmit={onSubmit}>
            <h2 className="form__title">{name}</h2>
            {
                children
            }
        </FormStyled>
    )
}

export default Form