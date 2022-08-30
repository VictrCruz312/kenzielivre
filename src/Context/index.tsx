import { ReactNode } from "react"
import { AuthProvider } from "./auth"


interface IPropsContext {
    children:ReactNode
}

const Context = ( { children }:IPropsContext ) => (

    <AuthProvider>
        { children }
    </AuthProvider>
)
export default Context