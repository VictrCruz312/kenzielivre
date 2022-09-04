import { ReactNode } from "react";
import { AuthProvider } from "./auth";
import { ModalProvider } from "./Modal";
import { RequestProvider } from "./Request";

interface IPropsContext {
  children: ReactNode;
}

const Context = ({ children }: IPropsContext) => (
  <RequestProvider>
    <AuthProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </AuthProvider>
  </RequestProvider>
);
export default Context;
