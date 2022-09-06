import { ReactNode } from "react";
import { AuthProvider } from "./auth";
import { CartProvider } from "./Cart";
import { ModalProvider } from "./Modal";
import { RequestProvider } from "./Request";

interface IPropsContext {
  children: ReactNode;
}

const Context = ({ children }: IPropsContext) => (
  <RequestProvider>
    <AuthProvider>
      <ModalProvider>
        <CartProvider>{children}</CartProvider>
      </ModalProvider>
    </AuthProvider>
  </RequestProvider>
);
export default Context;
