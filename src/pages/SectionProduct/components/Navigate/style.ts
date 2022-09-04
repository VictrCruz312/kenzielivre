import styled, { css } from "styled-components"

export const NavigateStyled = styled.nav`
    box-sizing: border-box;

    width: 100%;
    height: 70px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-radius: 4px;

    padding: 0px 5px;
    margin-bottom: 10px;

    .navigate__title{
        font-family: 'Roboto';
        font-weight: 500;
        font-size: 20px;

        color: #F5F5F5;

        margin: 25px 10px 0px 0px ;
        
        @media(min-width:450px){
            font-size: 25px;
        }
    }
`