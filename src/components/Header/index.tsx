import { HeaderStyled } from "./style";

import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

import { AiOutlineConsoleSql, AiOutlineSearch } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineCloseSquare } from "react-icons/ai";

import Modal from "../Modal";
import { useModal } from "../../Context/Modal";
import { useAuthSearch } from "../../Context/authProductSearch";
import { useRequest } from "../../Context/Request";
import { IProduct } from "../../services/interface/Product";

interface IPropsHeader {
  onText: (text: string) => void;
  awayLogo?: string;
  filterDescription?: any;
  filterBrand?: any;
  filterModel?: any;
  filterCategory?: any;
}

const Header = ({
  onText,
  awayLogo = "/home",
}: IPropsHeader) => {
  const { isModalGlobal, isleaveGlobal, stateModalGlobal } = useModal();

  const { 
    takeFilter, 
    setFilter, 
    filter, 
    takePage, 
    setProductFilter,
    setPage,
    setPageFilter
  } = useAuthSearch();

  const navigate = useNavigate();

  const goAway = () => navigate(awayLogo);

  const takeText = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value.toLowerCase());
  };

  const takeSearch = () => {
   
    if( filter != "" ){
      takeFilter( 1 );

      setPage(1)
    }else{
      setProductFilter([])
      setPageFilter(0)

      takePage(1)
    }

    navigate("/home/sectionProduct");
  };

  return (
    <>
      <HeaderStyled>
        <button className="backButton global" onClick={goAway}>
          <h1 className="backButton__title global">KenzieLivre</h1>
        </button>
        <div className="blockSearch global">
          <input
            onChange={takeText}
            className="blockSearch__SearchText global"
            type="text"
            placeholder="Buscar produtos, marcas e muito mais..."
          />
          <button
            onClick={takeSearch}
            className="blockSearch__button global"
            type="button"
          >
            <AiOutlineSearch size={25} />
          </button>
        </div>
        <nav className="navegation global">
          <button
            className="navegation__options global"
            onClick={stateModalGlobal}
          >
            {isleaveGlobal ? (
              <AiOutlineCloseSquare color="primary" fontSize="medium" />
            ) : (
              <ArticleOutlinedIcon color="primary" fontSize="medium" />
            )}
          </button>
          <button
            className="navegation__cart global"
            onClick={() => navigate("/cart")}
          >
            <HiShoppingCart size={24} />
          </button>
        </nav>
      </HeaderStyled>
      {isModalGlobal && <Modal />}
    </>
  );
};

export default Header;
