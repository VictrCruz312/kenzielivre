import * as yup from "yup";

export const shemaRegisterCliente = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  lastname: yup.string().required("Sobrenome é obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatoria")
    .min(6, "No minimo 6 caracteres"),
  confirmPassword: yup
    .string()
    .required("Confirmar senha")
    .oneOf([yup.ref<string>("password")], "Senha diferente"),
  auth: yup.string().required("Tipo de conta é obrigatório"),
  profileImage: yup.string().required("Imagem do perfil é obrigatória"),
});

export const shemaRegisterVendedor = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  lastname: yup.string().required("Sobrenome é obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatoria")
    .min(6, "No minimo 6 caracteres")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial"),
  confirmPassword: yup
    .string()
    .required("Confirmar senha")
    .oneOf([yup.ref<string>("password")], "Senha diferente"),
  auth: yup.string().required("Tipo de conta é obrigatório"),
  profileImage: yup.string().required("Imagem do perfil é obrigatória"),
  imageLogo: yup.string().required("Imagem da logo é obrigatória"),
});
