import Select from "../../../../components/Select"
import { NavigateStyled } from "./style"

interface IPropsNavigate {
    title?:string
}

const Navigate = ( { title = "Products"}:IPropsNavigate ) => {

    const TakeValue = ( e:any ) => {
        const value = e.target.value
    }

    return(
        <NavigateStyled>
            <h2 className="navigate__title">{title}</h2>
            <Select
                arrayText={["Maior preço", "Menor Preço"]}
                register={()=>{}}
                onChange={TakeValue}
                name="teste"
                label="buscar por preço"
            />
        </NavigateStyled>
    )
}

export default Navigate