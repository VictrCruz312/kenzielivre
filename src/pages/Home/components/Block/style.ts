import styled, { css } from "styled-components"

export const BlockStyled = styled.div`
    
    box-sizing: border-box;

    width: 100%;
    height: 100%;
    min-height: calc(100vh - 160px);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding: 0px 10px;

    @media(min-width:890px){
        min-height: calc(100vh - 110px);

        padding: 0px 74px;
    }
`