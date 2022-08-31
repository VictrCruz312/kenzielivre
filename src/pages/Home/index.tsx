import ModalApresentacao from "../../components/modalApresentacao";
import { HomeStyled } from "./style";

const Home = () => {
  return (
    <>
      <HomeStyled>
        <ModalApresentacao
          title="Olá, sou um teste"
          description="Meu desejo é ser um programador"
        />
      </HomeStyled>
    </>
  );
};
export default Home;
