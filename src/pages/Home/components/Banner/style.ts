import styled from "styled-components"

export const BannerStyled = styled.figure`
    box-sizing: border-box;

    width: 100%;
    height: 450px;
    min-height: 340px;

    margin-top: 10px;

    background-color: rgba(63,61,86, 85%);

    overflow: hidden;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    box-shadow: 0px 0px 9px -1px #000000;

    @media(min-width:400px){
        margin-top: 20px;
    }

    @media(min-width:550px){
        justify-content: center;
    }

    img{
        width: 100%;
        min-width: 750px;
        max-width: 1250px;

        transform: translateX(-10%);

        @media(min-width:550px){
            transform: translateX(0%);
        }
    }
`