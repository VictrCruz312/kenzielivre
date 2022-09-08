import { useState } from "react"
import { BannerStyled, ProgressBar } from "./style"

interface IPropsBanner {
    arrayImage:string[],
    delay:number
}

const Banner = ( { arrayImage, delay }:IPropsBanner ) => {
    
    const [ image, setImage ] = useState("https://http2.mlstatic.com/D_NQ_613450-MLA51443136055_092022-OO.webp")
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
        <>
            <BannerStyled>
                <img src={image} alt="" />
            </BannerStyled>
            <ProgressBar/>
        </>
    )
}

export default Banner