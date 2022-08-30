import { createContext, ReactNode, useContext } from "react"

const AuthContext = createContext<IContextAuth>({} as IContextAuth )

interface IContextAuth {

}

interface IPropsAuth {
    children:ReactNode
}

export const AuthProvider = ( { children }:IPropsAuth ) => {

    return(
        <AuthContext.Provider value={{
            
        }}>

        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)