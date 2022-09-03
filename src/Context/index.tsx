import { ReactNode } from "react";
import { AuthProvider } from "./auth";
import { ModalProvider } from "./Modal";

interface IPropsContext {
  children: ReactNode;
}

const Context = ({ children }: IPropsContext) => (
  <AuthProvider>
    <ModalProvider>
      {children}
    </ModalProvider>
  </AuthProvider>
);
export default Context;
