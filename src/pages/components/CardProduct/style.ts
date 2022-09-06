import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

export const CardProductStyled = styled(Link)`
    box-sizing: border-box;

    transition: 200ms;

    width: 250px;
    height: 380px;

    border: none;
    outline: 0;
    padding: none;
    margin: 10px 20px 10px 0px;

    border-radius: 8px;

    background-color: #FFF;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    opacity: 0%;

    text-decoration: none;

    :hover{
        box-shadow: 0px 0px 7px -2px rgba(63, 61, 86, 0.5);
    }

    animation: carAnimation 1.5s forwards;

    @keyframes carAnimation {
        to{
            opacity: 100%;
        }
    }

    .block{
        box-sizing: border-box;
        
        border-radius: 8px 8px 0px 0px;

        width: 250px;
        max-width: 250px;
        height: 230px;
        max-height: 230px;

        display: flex;
        justify-content: center;
        align-items: center;

        overflow: hidden;
        .block__image{
            height: 100%;
        }
    }
`



export const Information = styled.div`
    
    box-sizing: border-box;

    transition: 200ms;

    width: 250px;
    height: 150px;

    background-color: rgba(28, 27, 35, 0.85);
    border-radius: 4px;

    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;

    font-family: "Inter";

    .information__lastValue{
        font-size: 13px;
        font-weight: 500;
        text-decoration: line-through;

        color: rgba(255, 56, 56, 0.9);
    }

    .information__currentValue{
        font-size: 23px;
        font-weight: 600;

        color: rgba(75, 192, 131, 1);
    }

    .information__product{
        box-sizing: border-box;

        width: 100%;
        max-width: 230px;
        height: 45px;
        max-height: 45px;

        white-space: pre-line;
        overflow: hidden;            

        text-overflow: ellipsis;  

        font-size: 15px;
        font-weight: 300;

        color: #F5F5F5;
        
        padding: none;

        text-align: start;
    }

    .information__favorites{

        box-sizing: border-box;

        transition: 200ms;

        border: none;
        outline: 0;

        background-color: transparent;

        display: flex;
        justify-content: center;
        align-items: center;

        align-self: flex-end;
    }
`