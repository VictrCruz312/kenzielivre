import * as yup from "yup"

export const shemaLogin = yup.object().shape({
    email:yup.string().required("Email Obrigatorio").email("Email Invalido"),
    password:yup.string().required("Senha Obrigatoria")
})