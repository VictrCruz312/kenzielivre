import CardProduct from "../../../components/CardProduct"
import { ShowcaseStyled } from "./style"

import { v4 as uuid } from "uuid"

interface IPropsShowcase {
    arrayProduct:any
}

const Showcase = ( { arrayProduct }:IPropsShowcase ) => {

    return(
        <ShowcaseStyled>
            {
                arrayProduct?.map(({ id, images, description, lastPrice, currentPrice, promotion }:any) => 

                <CardProduct 
                    key={uuid()} 
                    id={id} 
                    src={images[0]} 
                    alt={description} 
                    lastValue={lastPrice} 
                    currentValue={currentPrice} 
                    description={description} 
                    promotion={promotion}
                />
                )
            }
        </ShowcaseStyled>
    )
}

export default Showcase