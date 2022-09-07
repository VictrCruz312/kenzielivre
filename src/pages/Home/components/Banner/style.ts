import styled from "styled-components"

export const BannerStyled = styled.figure`
    box-sizing: border-box;

    width: 100%;
    height: auto;

    margin-top: 10px;

    background-color: rgba(63,61,86, 85%);

    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
    
    box-shadow: 0px 0px 9px -1px #000000;

    @media(min-width:400px){
        margin-top: 20px;
    }

    img{
        width: 100%;
        min-width: 750px;

        transform: translateX(15%);
        
        @media(min-width:350px){
            transform: translateX(10%);
        }
        @media(min-width:505px){
            transform: translateX(0%);
        }
    }
`

export const ProgressBar = styled.div`
    box-sizing: border-box;

    width: 0%;
    height: 5px;

    background-color: #1976d2;
    border-radius: 4px;

    animation: teste 75s ease infinite;

    @keyframes teste {
        20%{
            width: 20%;
        }
        40%{
            width: 40%;
        }
        60%{
            width: 60%;
        }
        80%{
            width: 80%;
        }
        to{
            width: 100%;
        }
    }
`