import * as yup from "yup";

export const schemaResidence = yup.object().shape({
  cep: yup.string().required("cep é obrigatório"),
  estado: yup.string().required("estado é obrigatório"),
  cidade: yup.string().required("cidade é obrigatório"),
  endereco: yup.string().required("endereço é obrigatório"),
  numero: yup.string().required("número é obrigatório"),
  complemento: yup.string(),
});
