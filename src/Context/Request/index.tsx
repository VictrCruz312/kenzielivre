import { createContext, ReactNode, useContext } from "react";

import { IcreateUser, IReturnData, IUserCredentials, IUserReturn, IUserVendedor } from "../../services/interface/User";
import { IProduct, IProductReturn } from "../../services/interface/Product";

import { 
  takeUsers,
  createUser,
  userLogin,
  updateUser,
  deleteUser,
  TakeAllProduct,
  SearchProductUserId,
  SearchProductId,
  TakeProductPerPage,
  TakePromotionProduct,
  createProduct,
  updateProduct,
  deleteProduct
} from "../../services/api"

const RequestContext = createContext<IContextRequest>({} as IContextRequest);

interface IContextRequest {
    takeUsers:()=>Promise<IUserReturn[]>,
    createUser:( user:IcreateUser )=>Promise<IReturnData>,
    userLogin:( user:IUserCredentials )=>Promise<IReturnData>,
    updateUser:( userUpdate:IUserVendedor, idUser:number )=>Promise<IReturnData>,
    deleteUser:( idUser:number )=>Promise<object> ,
    TakeAllProduct:()=>Promise<IProduct[]>,
    SearchProductUserId:( idUser:number )=>Promise<IProduct[]>,
    SearchProductId:( idProduct:number )=>Promise<IProduct[]>,
    TakeProductPerPage:( page:number )=>Promise<IProduct[]>,
    TakePromotionProduct:()=>Promise<IProduct[]>,
    createProduct:( product:IProduct )=>Promise<IProductReturn>,
    updateProduct:( upadateProduct:IProduct, idProduct:number )=>Promise<IProductReturn>,
    deleteProduct:( idProduct:number )=>Promise<object> ,
}

interface IPropsRequest {
  children: ReactNode;
}

export const RequestProvider = ({ children }: IPropsRequest) => {

  

  return <RequestContext.Provider value={{
    takeUsers,
    createUser,
    userLogin,
    updateUser,
    deleteUser,
    TakeAllProduct,
    SearchProductUserId,
    SearchProductId,
    TakeProductPerPage,
    TakePromotionProduct,
    createProduct,
    updateProduct,
    deleteProduct
  }}>{children}</RequestContext.Provider>;
};

export const useRequest = () => useContext(RequestContext);
