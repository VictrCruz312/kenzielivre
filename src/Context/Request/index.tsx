import { createContext, ReactNode, useContext } from "react";

const RequestContext = createContext<IContextRequest>({} as IContextRequest);

interface IContextRequest {}

interface IPropsRequest {
  children: ReactNode;
}

export const RequestProvider = ({ children }: IPropsRequest) => {

  

  return <RequestContext.Provider value={{

  }}>{children}</RequestContext.Provider>;
};

export const useRequest = () => useContext(RequestContext);
