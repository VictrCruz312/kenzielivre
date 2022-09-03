import styled, { css } from "styled-components"

export const ModalStyled = styled.div`
    box-sizing: border-box;

    position: absolute;
    top:160px;
    left:0;

    z-index: 999999;

    width: 100%;
    height: auto;

    background-color: rgba(28, 27, 35, 0.94);
    backdrop-filter: blur(20px);

    svg{
        color:#F5F5F5;
    }

    @media(min-width:890px){
        top:110px;
    }
`