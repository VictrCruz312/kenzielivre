import { TextAreaStyled } from "./style"

interface IPropsTextArea {
    label:string,
    register:any,
    name:string,
    size?: "small" | "medium",
    message: string | undefined
}

const TextArea = ( { label, register, name, size, message }:IPropsTextArea ) => {

    return(
        <TextAreaStyled 
            placeholder={message ? message : label} 
            {...register(name)} 
            size={size}
            message={message}
        >
            
        </TextAreaStyled>
    )
}

export default TextArea