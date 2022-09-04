import styled, { css, keyframes } from "styled-components"

interface IPropsModalStyled {
    isModalGlobal:boolean
}

const handleHownModal = keyframes`
    from{
        transform: translateY(-100%);
        opacity: 0%;
    }
    80%{
        opacity: 100%;
    }
    to{
        transform: translateY(0%);
    }
`

const handleRiseModal = keyframes`
    from{
        transform: translateY(0%);
        opacity: 100%;
    }
    80%{
        opacity: 0%;
    }
    to{
        transform: translateY(-100%);
    }
`

export const ModalStyled = styled.div<IPropsModalStyled>`
    box-sizing: border-box;

    position: absolute;
    top:160px;
    left:0;

    z-index: 999999;

    width: 100%;
    height: auto;
    
    background-color: rgba(28, 27, 35, 0.94);
    backdrop-filter: blur(20px);
    
    transform: translateY(-100%);


    ${({ isModalGlobal }) =>
        
        css`
            animation: cubic-bezier(.59,-0.42,.33,1.39) ${isModalGlobal ? handleHownModal : handleRiseModal} 0.5s;
        `
    }
    
    animation-fill-mode: forwards;

    svg{
        color:#F5F5F5;
    }

    @media(min-width:890px){
        top:110px;
    }
`