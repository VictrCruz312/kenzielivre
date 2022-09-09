import { NavigateStyled } from "./style"

interface IPropsNavigate {
    title?:string
}

const Navigate = ( { title = "Products"}:IPropsNavigate ) => {

    return(
        <NavigateStyled>
            <h2 className="navigate__title">{title}</h2>
        </NavigateStyled>
    )
}

export default Navigate