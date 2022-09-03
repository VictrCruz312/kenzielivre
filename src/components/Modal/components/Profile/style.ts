import styled, { css } from "styled-components"

export const ProfileStyled = styled.div`
    box-sizing: border-box;

    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 10px;

    background-color: rgba(63, 61, 86, 1);
    


    .profile__information{

        display: flex;

        margin-bottom: 10px;

        .information__text{

            margin-left: 10px;

            .text__title{
                font-family: 'Roboto';
                font-weight: 500;
                font-size: 30px;

                color: #0063CC;
            }

            .text__description{
                margin-top: 5px;

                font-family: 'Roboto';
                font-weight: 300;
                font-size: 17px;

                color: #F5F5F5;
            }
        }
    }

    .profile__navegation--logged{
        box-sizing: border-box;

        transition: 200ms;

        width: 100%;
        max-width: 452px;

        display: flex;
    }

    .profile__navegation{

        box-sizing: border-box;

        transition: 200ms;

        width: 100%;
        max-width: 452px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        gap: 10px;


        @media(min-width:600px){

            max-width: 918px;

            flex-direction: row;
            justify-content:flex-start;
        }
    }
`