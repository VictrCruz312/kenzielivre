import { createContext, ReactNode, useContext, useState } from "react";

const ModalContext = createContext<IContextModal>({} as IContextModal);

interface IContextModal {
  isModalGlobal:boolean,
  stateModal:()=>void,
}

interface IPropsModal {
  children: ReactNode;
}

export const ModalProvider = ({ children }: IPropsModal) => {

  const [ isModalGlobal, setIsModalGlobal ] = useState(false)

  const stateModal = () => {setIsModalGlobal(!isModalGlobal)}

  return <ModalContext.Provider value={{
    isModalGlobal,
    stateModal
  }}>{children}</ModalContext.Provider>;
};

export const useModal = () => useContext(ModalContext);
