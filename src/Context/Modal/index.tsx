import { createContext, ReactNode, useContext, useState } from "react";

const ModalContext = createContext<IContextModal>({} as IContextModal);

interface IContextModal {
  isModalGlobal:boolean,
  isleaveGlobal:boolean,
  stateModalGlobal:() => void
}

interface IPropsModal {
  children: ReactNode;
}

export const ModalProvider = ({ children }: IPropsModal) => {

  const [ isModalGlobal, setIsModalGlobal ] = useState(false)
  const [ isleaveGlobal, setIsLeaveGlobal] = useState(false)

  const stateModalGlobal = () => {

    if( isModalGlobal && isleaveGlobal){

      setIsLeaveGlobal(false)
      setTimeout(()=>{
        setIsModalGlobal(false)
      } ,500)
    }
    if( !isModalGlobal && !isleaveGlobal){

      setIsLeaveGlobal(true)
      setIsModalGlobal(true)
    }
  }

  

  return <ModalContext.Provider value={{
    isModalGlobal,
    isleaveGlobal,
    stateModalGlobal
  }}>{children}</ModalContext.Provider>;
};

export const useModal = () => useContext(ModalContext);
