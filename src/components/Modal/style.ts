import styled, { css } from "styled-components"

export const ModalStyled = styled.div`
    box-sizing: border-box;

    position: absolute;
    top:160px;
    left:0;

    z-index: 999999;

    width: 100%;
    height: calc(100vh - 110px);

    background-color: rgba(28, 27, 35, 0.94);
    backdrop-filter: blur(20px);

    @media(min-width:890px){
        top:110px;
    }
`