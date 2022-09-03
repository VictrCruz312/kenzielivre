import CardProduct from "../../../components/CardProduct"
import { CarouselProductStyled } from "./style"

import { BiLeftArrowCircle } from 'react-icons/bi';
import { BiRightArrowCircle } from 'react-icons/bi';

import { v4 as uuid } from "uuid"
import { useRef } from "react";
import CardExtra from "../../../../components/cardExtra";

interface IProduct {
    userId: number,
    brand: string,
    model: string,
    lastValue:number
    currentValue: number,
    color: string,
    description: string,
    quantity: number,
    warranty: string,
    images: string[]
    id: number
}

export interface ICardExtra {
    imageLogo:string
}

interface IPropsCarouselProduct {
    arrayDados:IProduct[] | ICardExtra[]
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

                    arrayDados?.map(({ id, images, description, lastValue, currentValue }:any) => 

                    <CardProduct 
                        key={uuid()} 
                        id={id} 
                        src={images[0]} 
                        alt={description} 
                        lastValue={lastValue} 
                        currentValue={currentValue} 
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