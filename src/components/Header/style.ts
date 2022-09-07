import styled, { css } from "styled-components"

export const HeaderStyled = styled.header`
    box-sizing: border-box;

    transition: 200ms;
    
    position: relative;

    z-index: 9999;

    width: 100%;
    height: 160px;

    background-color: #00091C;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    padding: 0px 10px;

    @media(min-width:890px){
        padding: 0px 74px;

        height: 110px;

        align-items: center;
    }

    .global, .global::placeholder{
        box-sizing: border-box;

        transition: 200ms;

        border: none;
        outline: 0;

        :hover{
            transition: 200ms;
        }

        :focus{
            transition: 200ms;
        }
    }

    .backButton{
        margin: 25px 10px 10px 0px;
        
        padding: 5px;
        
        background-color: transparent;
        border-radius: 4px;

            @media(min-width:890px){
                font-size: 30px;
    
                margin: 10px 10px 10px 10px;
            }

        .backButton__title{
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 25px;
            line-height: 35px;
            letter-spacing: 0.1em;
    
            color: #F5F5F5;

            :hover{
                color: #1976d2;
            }
        }
    }

    .blockSearch{
        display: flex;
        align-items: center;

        width: calc(100% - 20px);

        position: absolute;
        top:100px;

        @media(min-width:890px){
            position:relative;
            top:0;

            max-width: 380px;
        }
    }

    .blockSearch__SearchText{
        width: 100%;
        height: 35px;

        padding: 10px;

        border-radius: 4px 0px 0px 4px; 

        color: #222;

        @media(min-width:890px){
            width: 300px;
            max-width: 380px;
        }

        ::placeholder{
                opacity: 1;
        }

        :hover{
            ::placeholder{
                opacity: 0;
            }
        }

    }

    .blockSearch__button{
        width: 80px;
        max-width: 80px;
        min-width: 80px;
        height: 35px;

        padding: none;

        border-radius: 0px 4px 4px 0px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #0063CC;
        color: #F5F5F5;
        
        :hover{
            background-color: #1976d2;
        }
        
        :focus{
            background-color: #1286d2;
        }
        
    }

    .navegation{
        margin: 30px 0px 0px 0px;

        @media(min-width:890px){
            margin: 10px 10px 10px 10px;
        }
    }

    .navegation__options{
        margin: 0px;

        background-color: transparent;
        
        svg{
            color: #F5F5F5;

            font-size: 25px;

            :hover{
                color:#1976d2;
            }
        }

        @media(min-width:890px){
            margin: 10px;
        }
    }

    .navegation__cart{
        margin: 0px;

        background-color: transparent;

        svg{
            color: #F5F5F5;

            :hover{
                color:#1976d2;
            }
        }

        @media(min-width:890px){
            margin: 10px;
        }
    }
`