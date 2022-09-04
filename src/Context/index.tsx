import { ReactNode } from "react";
import { AuthProvider } from "./auth";
import { ModalProvider } from "./Modal";
import { RequestProvider } from "./Request";

interface IPropsContext {
  children: ReactNode;
}

const Context = ({ children }: IPropsContext) => (
  <AuthProvider>
    <ModalProvider>
      <RequestProvider>
        {children}
      </RequestProvider>
    </ModalProvider>
  </AuthProvider>
);
export default Context;
