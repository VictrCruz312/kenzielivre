import styled, { css } from "styled-components"

export const FormStyled = styled.form`
    box-sizing: border-box;

    transition: 200ms;

    width: 100%;
    max-width: 320px;
    height: auto;

    margin: 40px 0px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .form__title{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 35px;
        line-height: 41px;

        letter-spacing: 0.1em;

        color: #FFFFFF;

        @media(min-width:563px){
            align-self: flex-start;
        }
    }

    .form__optionsText{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        /* identical to box height */

        letter-spacing: 0.1em;

        color: #FFFFFF;
    }
`