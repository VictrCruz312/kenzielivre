import styled, { css } from "styled-components"

interface IPropsStyledTextArea {
    size?:"small" | "medium"
    message:string | undefined
}

export const TextAreaStyled = styled.textarea<IPropsStyledTextArea>`
    box-sizing: border-box;

    transition: 200ms;

    font-family: "Inter";
    font-size: 20px;

    width: 100%;
    max-width:${({ size })=>

        size === "small" ? "320px" 
            :
        size === "medium" ? "610px"
            :
        "800px"
    };
    height: ${({ size })=>

        size === "small" ? "140px" 
            :
        size === "medium" ? "210px"
            :
        "300px"
    };

    resize: none;
    border: none;
    outline: 0;

    margin: 8px 0px 4px 0px;

    background-color: rgba(255, 255, 255, 0.15);
    border-bottom: 1px solid ${({ message })=> message ? "#d32f2f" : "#F5F5F5"};
    color:#F5F5F5;

    padding: 10px;

    ::-webkit-scrollbar{
        width: 5px;
    }

    ::-webkit-scrollbar-thumb{
        width: 5px;
        border-radius: 4px;

        background-color: rgba(216, 216, 216, 1);
    }

    :focus{
        transition: 200ms;

        border-bottom: 1px solid ${({ message })=> message ? "#e92d2d" : "#0063CC"};

        ::placeholder{
            transition: 200ms;

            color:${({ message })=> message ? "#e92d2d" : "#0063CC"};
        }
    }

    ::placeholder{

        color:rgba(216, 216, 216, 1);

        color:${({ message })=> message ? "#d32f2f" : "#F5F5F5"};


    }
`