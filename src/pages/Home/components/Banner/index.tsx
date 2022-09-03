import { useState } from "react"
import { BannerStyled } from "./style"

interface IPropsBanner {
    arrayImage:string[],
    delay:number
}

const Banner = ( { arrayImage, delay }:IPropsBanner ) => {
    
    const [ image, setImage ] = useState("https://img.freepik.com/psd-premium/faixa-de-midia-social-negra-sexta-feira-de-produtos-eletronicos-em-ofertas_220664-1867.jpg?w=2000")
    const [ value, setValue ] = useState(0)

    setTimeout(()=> {
        
        if( value <= arrayImage.length ){

            setImage(arrayImage[value])
            setValue(value + 1)
        }
        if( value === arrayImage.length -1){

            setImage(arrayImage[value])
            setValue(0)
        }

    } ,delay)

 

    return(
        <BannerStyled>
            <img src={image} alt="" />
        </BannerStyled>
    )
}

export default Banner