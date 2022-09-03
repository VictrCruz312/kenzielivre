import styled from "styled-components"

export const BannerStyled = styled.div`
    box-sizing: border-box;

    width: 100%;
    height: 340px;
    min-height: 340px;

    margin-top: 10px;

    background-color: rgba(63,61,86, 85%);

    @media(min-width:400px){
        margin-top: 20px;
    }
`