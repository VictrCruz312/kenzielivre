import CardProduct from "../../../components/CardProduct"
import { CarouselProductStyled } from "./style"

import { BiLeftArrowCircle } from 'react-icons/bi';
import { BiRightArrowCircle } from 'react-icons/bi';

import { v4 as uuid } from "uuid"
import { useRef } from "react";
import CardExtra from "../../../../components/cardExtra";
import { IUserReturn } from "../../../../services/interface/User";

export interface IProduct {
    brand?: string,
    category?: string,
    color?: string,
    currentPrice?: number,
    description?: string,
    id?: number,
    images?: string[],
    lastPrice?: number,
    model?: string,
    promotion?: boolean,
    quantity?: number,
    userId?: number,
    warranty?: string,
}

export interface ICardExtra {
    imageLogo:string
}

interface IPropsCarouselProduct {
    arrayDados?:IProduct[] | IUserReturn[]
    type:"Product" | "Logo"
}

const CarouselProduct = ( { arrayDados, type }:IPropsCarouselProduct ) => {

    const carousel = useRef<any>(null)

    const valueCarousel = type === "Product" ? 270 : 220

    const nextProduct = () => carousel.current.scrollLeft += valueCarousel 

    const previousProduct = () => carousel.current.scrollLeft -= valueCarousel

    return(
        <CarouselProductStyled type={type}>
            <button id="buttonLeft" onClick={previousProduct}>
                <BiLeftArrowCircle/>
            </button>
            <section className="Carousel" ref={carousel}>
                {   

                    type === "Product" ?

                    arrayDados?.map(({ id, images, description, lastPrice, currentPrice }:any) => 

                    <CardProduct 
                        key={uuid()} 
                        id={id} 
                        src={images[0]} 
                        alt={description} 
                        lastValue={lastPrice} 
                        currentValue={currentPrice} 
                        description={description} 
                    />
                    )

                    :

                    arrayDados?.map(({ imageLogo }:any) => 

                    <CardExtra
                        key={uuid()} 
                        type="cardLogoEmpresa"
                        src={imageLogo}
                        alt="logo"
                    />
                    )
                }
            </section>
            <button id="buttonRight" onClick={nextProduct}>
                <BiRightArrowCircle/>
            </button>
        </CarouselProductStyled>
    )
}

export default CarouselProduct