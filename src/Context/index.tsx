import { ReactNode } from "react";
import { AuthProvider } from "./auth";
import { AuthSearch } from "./authProductSearch";
import { CartProvider } from "./Cart";
import { ModalProvider } from "./Modal";
import { RequestProvider } from "./Request";

interface IPropsContext {
  children: ReactNode;
}

const Context = ({ children }: IPropsContext) => (
  <RequestProvider>
    <AuthProvider>
      <AuthSearch>
        <ModalProvider>
          <CartProvider>{children}</CartProvider>
        </ModalProvider>
      </AuthSearch>
    </AuthProvider>
  </RequestProvider>
);
export default Context;
