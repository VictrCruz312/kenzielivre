import styled, { css } from "styled-components"

export const CategoryStyled = styled.div`

    box-sizing: border-box;

    transition: 200ms;

    width: 100%;

    padding: 30px 0px;

    .category__title{
        transition: 200ms;

        font-family: 'Roboto';
        font-weight: 700;
        font-size: 25px;
        letter-spacing: 0.05em;

        color: #F5F5F5;

        @media(min-width:400px){
            font-size: 30px;
        }
    }
`