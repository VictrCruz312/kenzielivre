import { createContext, ReactNode, useContext, useState } from "react";

const ModalContext = createContext<IContextModal>({} as IContextModal);

interface IContextModal {
  isModalGlobal: boolean;
  isleaveGlobal: boolean;
  stateModalGlobal: () => void;
  leaveModalFunction: () => void;
}

interface IPropsModal {
  children: ReactNode;
}

export const ModalProvider = ({ children }: IPropsModal) => {
  const [isModalGlobal, setIsModalGlobal] = useState(false);
  const [isleaveGlobal, setIsLeaveGlobal] = useState(false);

  const stateModalGlobal = () => {
    if (isModalGlobal && isleaveGlobal) {
      setIsLeaveGlobal(false);
      setTimeout(() => {
        setIsModalGlobal(false);
      }, 500);
    }
    if (!isModalGlobal && !isleaveGlobal) {
      setIsLeaveGlobal(true);
      setIsModalGlobal(true);
    }
  };

  const leaveModalFunction = () => {
    setIsLeaveGlobal(false);
    setIsModalGlobal(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalGlobal,
        isleaveGlobal,
        stateModalGlobal,
        leaveModalFunction,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
