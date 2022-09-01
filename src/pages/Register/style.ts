import { style } from "@mui/system"
import { consumers } from "stream"
import styled, { css } from "styled-components"

export const RegisterStyled = styled.div`
    box-sizing: border-box;

    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #1C1B23;

    padding: 131px 10px 10px 10px;

    background-image: url(https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center center;

    @media(min-width:563px){
        padding: 131px 0px 0px 0px;
    }


    @media(min-width:860px){
        padding: 0px;

        justify-content: space-between;
    }

    .block__logo{
        position: absolute;
        left: 50%;
        top: 55px;

        width:250px;
        text-align: center;
        transform: translateX(-50%);

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 35px;
        letter-spacing: 0.1em;

        color: #F5F5F5;
        
        @media(min-width:563px){
            transform: translateX(0%);

            left: 1%;
            top: 55px;
        }
    }
`

export const Block = styled.div`
    
    display: none;

    @media(min-width:563px){
        box-sizing: border-box;

        transition: 200ms;

        width: 100%;
        height: 100%;

        display: flex;
        align-items: flex-end;

        padding: 0px 10px 105px 0px;
    }

`
