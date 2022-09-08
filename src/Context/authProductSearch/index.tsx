import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { IProduct } from "../../services/interface/Product";
import { useRequest } from "../Request";

const AuthContextSearch = createContext<IProductSearch>({} as IProductSearch);

interface IProductSearch {
  products: IProduct[] | undefined;
  setProducts: Dispatch<SetStateAction<IProduct[] | undefined>>;
  productFilter:IProduct[],
  setProductFilter:any,
  filter:string
  setFilter:( e:string )=>void
  takeFilter:( page:number )=> void,
  takePage:( page:number )=> void,
  page:number,
  setPage:( page:number )=> void,
  pageFilter:number,
  setPageFilter:( page:number )=> void,
}

interface IProps {
  children: ReactNode;
}

export const AuthSearch = ({ children }: IProps) => {

  const [ page, setPage ] = useState<number>(1)
  const [ pageFilter, setPageFilter ] = useState<number>(1)

  const [ products, setProducts] = useState<IProduct[]>();

  const [ filter, setFilter] = useState("");

  const [ productFilter, setProductFilter ] = useState<IProduct[]>([])
  
  const { takeProductFilterPage, TakeProductPerPage } = useRequest()

  const takeFilter = async ( page:number = 0 ) => {

    let filterArray:any = []

    setProductFilter([])

    await takeProductFilterPage( "description", page, filter )
      .then( (result:any) => { filterArray = [ ...result, ...filterArray ] } )

    await takeProductFilterPage( "category", page, filter )
      .then( (result:any) => { filterArray = [ ...result, ...filterArray ] })

    await takeProductFilterPage( "brand", page, filter )
      .then( (result:any) => { filterArray = [ ...result, ...filterArray ] } )

    await takeProductFilterPage( "model", page, filter )
      .then( (result:any) => { filterArray = [ ...result, ...filterArray ] } )

    const removeDuplicate = 
      filterArray.filter( ( product:any, i:any, array:any ) => array.findIndex( ( ele:any ) => ele.id === product.id ) == i )

    if( removeDuplicate.length != 0){
      setProductFilter(removeDuplicate);
    }
  };

  useEffect(()=>{takeFilter( 1 )},[filter])

  const takePage = ( page: number ) => {
    TakeProductPerPage(page).then((result) => {
      if (result.length != 0) {
        setProducts(result);
      }
    });
  };

  return (
    <AuthContextSearch.Provider
      value={{
        products,
        setProducts,
        productFilter,
        setProductFilter,
        filter,
        setFilter,
        takeFilter,
        takePage,
        page,
        setPage,
        pageFilter,
        setPageFilter,
      }}
    >
      {children}
    </AuthContextSearch.Provider>
  );
};

export const useAuthSearch = () => useContext(AuthContextSearch);
