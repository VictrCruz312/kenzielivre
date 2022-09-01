import { FooterStyled, ListDevsStyled } from "./style";
import { MdOutlineVerified, MdGavel } from "react-icons/md";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="containerFooter">
        <ListDevsStyled>
          <h4>Desenvolvido por:</h4>
          <ul>
            <li>
              <MdOutlineVerified />
              <p>Victor da Cruz</p>
            </li>
            <li>
              <MdOutlineVerified />
              <p>Mike Macedo</p>
            </li>
            <li>
              <MdOutlineVerified />
              <p>Lucas Mendes</p>
            </li>
            <li>
              <MdOutlineVerified />
              <p>Guilherme Antônio</p>
            </li>
            <li>
              <MdOutlineVerified />
              <p>Breno Figueiredo</p>
            </li>
          </ul>
        </ListDevsStyled>
        <div className="lineFooter"></div>
        <div className="containerInfos">
          <div className="terms">
            <MdGavel />
            <a href="#bottom">Termos e condições</a>
          </div>
          <div className="protection">
            <IoShieldCheckmarkOutline />
            <p>proteção de ponta a ponta</p>
          </div>
          <div className="iconsRedes">
            <a href="youtube.com">
              <AiFillYoutube className=" iconYt" />
            </a>
            <a href="instagram.com">
              <AiFillInstagram className=" iconInstagram" />
            </a>
            <a href="linkedin.com">
              <GrLinkedinOption className=" iconIn" />
            </a>
            <a href="#bottom">
              <BsTelephone className=" iconPhone" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <h3>Copyright 2022 © KenzieLivre</h3>
      </div>
    </FooterStyled>
  );
};

export default Footer;
