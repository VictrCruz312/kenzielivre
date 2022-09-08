import styled, { css } from "styled-components"

export const BlockStyled = styled.div`
    box-sizing: border-box;

    transition: 200ms;

    width: 100%;
    height: 100%;
    min-height: calc(100vh - 160px);

    padding: 10px 10px;

    @media(min-width:890px){
        min-height: calc(100vh - 110px);

        padding: 10px 74px;
    }
`