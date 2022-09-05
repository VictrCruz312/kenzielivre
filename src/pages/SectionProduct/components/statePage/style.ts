import styled, { css } from "styled-components"

export const StatePageStyled = styled.nav`
    box-sizing: border-box;

    transition: 200ms;

    width: 100%;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;

    .statePage__buttonLeft,.statePage__buttonRigth{
        box-sizing: border-box;

        transition: 200ms;

        border: none;
        outline: 0;
        padding: none;

        background-color: transparent;
    }
    svg{
        transition: 200ms;

        font-size: 50px;

        color: #F5F5F5;

        :hover{
            transition: 200ms;

            color: #1976d2;
        }
    }
`