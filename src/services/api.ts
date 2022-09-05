import axios from "axios";
import { IProduct, IProductReturn } from "./interface/Product";

import {
  IcreateUser,
  IReturnData,
  IUserReturn,
  IUserVendedor,
} from "./interface/User";
import { IUserCredentials } from "./interface/User";

const api = axios.create({
  baseURL: "https://kenzielivre.herokuapp.com",
  timeout: 5000,
});

const config = () => {
  const token = localStorage.getItem("@KenzieLivre:Token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// User

// GET / não precisa de autorização

export const takeUsers = (): Promise<IUserReturn[]> => {
  return api("/users").then(({ data }) => data);
};

// POST / não precisa de autorização

export const createUser = (user: IcreateUser): Promise<IReturnData> => {
  return api.post("/register", user).then(({ data }) => data);
};

export const userLogin = (user: IUserCredentials): Promise<IReturnData> => {
  return api.post("/login", user).then(({ data }) => data);
};

// PATCH / precisa de autorização e ser dono do usuario

export const updateUser = (
  userUpdate: IUserVendedor,
  idUser: number
): Promise<IReturnData> => {
  return api
    .patch(`/users/${idUser}`, userUpdate, config())
    .then(({ data }) => data);
};

// DELETE / precisa de autorização e ser dono do usuario

export const deleteUser = (idUser: number): Promise<object> => {
  return api.delete(`/users/${idUser}`, config()).then(({ data }) => data);
};

// Product

// GET / Não precisa de autorização

export const TakeAllProduct = (): Promise<IProduct[]> => {
  return api("/product").then(({ data }) => data);
};

export const SearchProductUserId = (idUser: number): Promise<IProduct[]> => {
  return api(`/product?userId=${idUser}`).then(({ data }) => data);
};

export const SearchProductId = (idProduct: number): Promise<IProduct[]> => {
  return api(`/product/${idProduct}`).then(({ data }) => data);
};

export const TakeProductPerPage = (page: number): Promise<IProduct[]> => {
  return api(`/product?_page=${page}&_limit=10`).then(({ data }) => data);
};

export const TakePromotionProduct = (): Promise<IProduct[]> => {
  return api("/product?promotion=true").then(({ data }) => data);
};

// POST / Precisa de autorização

export const createProduct = (product: IProduct): Promise<IProductReturn> => {
  return api.post("/product", product, config()).then(({ data }) => data);
};

// PATCH / Precisa de autorização / precisa ser o dono

export const updateProduct = (
  upadateProduct: IProduct,
  idProduct: number
): Promise<IProductReturn> => {
  return api
    .patch(`/product/${idProduct}`, upadateProduct, config())
    .then(({ data }) => data);
};

// PATCH / Precisa de autorização / precisa ser o dono

export const deleteProduct = (idProduct: number): Promise<object> => {
  return api.delete(`/product/${idProduct}`, config()).then(({ data }) => data);
};
