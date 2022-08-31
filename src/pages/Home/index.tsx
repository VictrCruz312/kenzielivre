import InputComponent from "../../components/Inputs";
import { HomeStyled } from "./style";

const Home = () => {
  return (
    <HomeStyled>
      <InputComponent placeholder="Name" type="password" />
    </HomeStyled>
  );
};
export default Home;
