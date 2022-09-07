import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { IProduct } from "../../services/interface/Product";

const AuthContextSearch = createContext<IProductSearch>({} as IProductSearch);

interface IProductSearch {
  products: IProduct[] | undefined;
  filterStateDescription: IProduct[] | undefined;
  filterStateBrand: IProduct[] | undefined;
  filterStateModel: IProduct[] | undefined;
  filterStateCategory: IProduct[] | undefined;
  filterStateMaster: IProduct[] | undefined;
  setProducts: Dispatch<SetStateAction<IProduct[] | undefined>>;

  //filtros-campo de busca-header
  setFilterStateMaster: Dispatch<SetStateAction<IProduct[]>>;
  setFilterStateDescription: Dispatch<SetStateAction<IProduct[]>>;
  setFilterStateBrand: Dispatch<SetStateAction<IProduct[]>>;
  setFilterStateModel: Dispatch<SetStateAction<IProduct[]>>;
  setFilterStateCategory: Dispatch<SetStateAction<IProduct[]>>;
}

interface IProps {
  children: ReactNode;
}

export const AuthSearch = ({ children }: IProps) => {
  const [products, setProducts] = useState<IProduct[]>();

  const [filterStateMaster, setFilterStateMaster] = useState<IProduct[]>([]);
  const [filterStateDescription, setFilterStateDescription] = useState<
    IProduct[]
  >([]);

  const [filterStateBrand, setFilterStateBrand] = useState<IProduct[]>([]);

  const [filterStateModel, setFilterStateModel] = useState<IProduct[]>([]);

  const [filterStateCategory, setFilterStateCategory] = useState<IProduct[]>(
    []
  );

  return (
    <AuthContextSearch.Provider
      value={{
        products,
        filterStateMaster,
        filterStateDescription,
        filterStateBrand,
        filterStateModel,
        filterStateCategory,
        setFilterStateMaster,
        setProducts,
        setFilterStateDescription,
        setFilterStateBrand,
        setFilterStateModel,
        setFilterStateCategory,
      }}
    >
      {children}
    </AuthContextSearch.Provider>
  );
};

export const useAuthSearch = () => useContext(AuthContextSearch);
