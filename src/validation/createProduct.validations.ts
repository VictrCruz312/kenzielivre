import * as yup from "yup";

export const shemaCreateProduct = yup.object().shape({
  brand: yup.string().required("Marca é obrigatória"),
  category: yup.string().required("Categoria é obrigatória"),
});
