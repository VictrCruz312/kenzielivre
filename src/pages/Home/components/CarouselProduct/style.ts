import styled, { css } from "styled-components"

interface ICarouselStyled {
    type:"Product" | "Logo"
}

export const CarouselProductStyled = styled.div<ICarouselStyled>`
    box-sizing: border-box;

    position: relative;

    z-index: 50;

    width: 100%;
    height: ${({ type }) => type === "Product" ? "400px" : "230px"};

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0px 10px;

    @media(min-width:480px){
        padding: 0px 100px;
    }

    .Carousel{
        box-sizing: border-box;

        width: ${({ type }) => type === "Product" ? "250px" : "200px"};
        height: 400px;

        overflow:hidden;

        display: flex;
        align-items: center;

        a:last-child{
            margin: 10px 0px 10px 0px;
        }

        @media(min-width:480px){
            width: 100%;
        }
    }

    #buttonLeft, #buttonRight{
        position: absolute;

        cursor: pointer;

        width: 70px;
        height: 70px;

        padding: none;
        border: none;
        outline: 0;
        border-radius: 50%;

        top: 50%;
        transform: translateY(-50%);

        svg{    
            transition: 200ms;

            font-size: 70px;

            color: #F5F5F5;

            :hover{
                transition: 200ms;

                color:#1976d2;
            }
        }

        z-index: 49;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: rgba(2,2,2,0.5);

        @media(min-width:480px){

            width: 80px;
            height: 80px;       
        }
    }
    #buttonLeft{
        left: 5px;

        @media(min-width:480px){
            left: 15px;
        }
    }
    #buttonRight{
        right: 5px;

        @media(min-width:480px){
            right: 15px;

        }
    }
        

`