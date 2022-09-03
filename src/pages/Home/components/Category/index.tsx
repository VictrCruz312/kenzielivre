import { CategoryStyled } from "./style"

interface IPropsCategory {
    name:string,
}

const Category = ( { name }:IPropsCategory ) => {

    return(
        <CategoryStyled>
            <h2 className="category__title">{ name }</h2>
        </CategoryStyled>
    )   
}

export default Category