import * as yup from "yup";

export const shemaCreateProduct = yup.object().shape({
  brand: yup.string().required("Marca é obrigatória"),
  currentPrice:yup.string().required("Preço atual é obrigatorio"),
  model:yup.string().required("Modelo  é obrigatorio"),
  description:yup.string().required("Descrição  é obrigatorio"),
  color:yup.string().required("Cor é obrigatorio"),
  category:yup.string().required("Categoria  é obrigatorio"),
  quantity:yup.string().required("Quantidade  é obrigatorio"),
  warranty:yup.string().required("Garantia  é obrigatorio"),
});

export const shemaCreateProductCheck = yup.object().shape({
  brand: yup.string().required("Marca é obrigatória"),
  lastPrice:yup.string().required("Preço atual é obrigatorio"),
  currentPrice:yup.string().required("Preço atual é obrigatorio"),
  model:yup.string().required("Modelo  é obrigatorio"),
  description:yup.string().required("Descrição  é obrigatorio"),
  color:yup.string().required("Cor é obrigatorio"),
  category:yup.string().required("Categoria  é obrigatorio"),
  quantity:yup.string().required("Quantidade  é obrigatorio"),
  warranty:yup.string().required("Garantia  é obrigatorio"),
});
