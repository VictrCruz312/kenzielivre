import { ButtonAll } from "../../../../components/Button";
import { PixStyled } from "./style";

const Pix = () => {
  return (
    <>
      <PixStyled>
        <ButtonAll size="medium" type="button" background="deft">
          Gerar código PIX
        </ButtonAll>
      </PixStyled>
      <ButtonAll size="large" background="deft" type="button">
        Avançar para finalização
      </ButtonAll>
    </>
  );
};
export default Pix;
