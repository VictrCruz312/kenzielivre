import Input from "../../components/Input";
import { HomeStyled } from "./style";

const Home = () => {
  return (
    <HomeStyled>
      <div>
        <Input placeholder="Nome" type="text" />
      </div>
    </HomeStyled>
  );
};
export default Home;
