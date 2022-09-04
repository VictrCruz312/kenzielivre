import { HeaderStyled } from "./style";

import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineCloseSquare } from "react-icons/ai";

import Modal from "../Modal";
import { useModal } from "../../Context/Modal";

interface IPropsHeader {
  onText: (text: string) => void;
  awayLogo?: string;
}

const Header = ({
  onText,
  awayLogo = "/home",
}: IPropsHeader) => {

  const { isModalGlobal, isleaveGlobal, stateModalGlobal } = useModal()

  const [text, setText] = useState("");

  const navigate = useNavigate();

  const goAway = () => navigate(awayLogo);

  const takeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    onText(text);
  };

  const takeTextButton = () => onText(text);

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
          onClick={takeTextButton}
          className="blockSearch__button global"
          type="button"
        >
          <AiOutlineSearch size={25} />
        </button>
      </div>
      <nav className="navegation global">
        <button className="navegation__options global" onClick={stateModalGlobal}>
          {
            isleaveGlobal ? 
              <AiOutlineCloseSquare color="primary" fontSize="medium"/>
              :
              <ArticleOutlinedIcon color="primary" fontSize="medium" />
          }
        </button>
        <button className="navegation__cart global" onClick={()=>navigate("/cart")}>
          <HiShoppingCart size={24} />
        </button>
      </nav>
    </HeaderStyled>
    {isModalGlobal&&<Modal/>}

   </>
  );
};

export default Header;
