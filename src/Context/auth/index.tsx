import { createContext, ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useRequest } from "../Request";

const AuthContext = createContext<IContextAuth>({} as IContextAuth);

interface IContextAuth {
  isAuth:boolean
  login:(data: IDataLogin)=>void
}

interface IPropsAuth {
  children: ReactNode;
}

export interface IDataLogin {
  email: string;
  password: string;
}

export const AuthProvider = ({ children }: IPropsAuth) => {

  const [ isAuth, setIsAuth ] = useState(false)

  const { userLogin } = useRequest()
  const navigate = useNavigate()

  const login = (data: IDataLogin) => {

    const toastId = toast.loading( "teste" )

    userLogin( data )
      .then( ({ accessToken, user }) => {
   
        localStorage.setItem( "@KenzieLivre:Token", accessToken )
        localStorage.setItem( "@KenzieLivre:User", JSON.stringify( user ) )

        toast.success("usuario logado", {
          id:toastId,
        })

        setIsAuth(true)
        navigate("/home")
      } )
      .catch( _ => {
        toast.error("usuario Invalido", {
          id:toastId,
        })

      } )
  };

  return <AuthContext.Provider value={{
    isAuth,
    login
  }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
