import { FooterStyled } from "./style";
import { MdOutlineVerified, MdGavel } from "react-icons/md";
import { AiFillYoutube, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <FooterStyled>
      <div className="containerFooter">
        <div className="listDevs">
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
        </div>
        <div className="containerInfos">
          <div className="terms">
            <MdGavel />
            <a href="#bottom">Termos e condições</a>
          </div>
          <div className="protection">
            <MdGavel />
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
              <AiFillLinkedin className=" iconIn" />
            </a>
            <a href="#bottom">
              <BsTelephone className=" iconPhone" />
            </a>
          </div>
        </div>
      </div>
      <h3 className="copyright">Copyright 2022 © KenzieLivre</h3>
    </FooterStyled>
  );
};

export default Footer;
