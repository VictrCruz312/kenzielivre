import InputComponent from "../../../../components/Inputs";
import { CartaoStyled } from "./style";
import { useForm } from "react-hook-form";
import { ButtonAll } from "../../../../components/Button";

interface ICartaoForm {
  number: string;
  code: string;
  date: string;
}

const Cartao = () => {
  const { register, handleSubmit } = useForm<ICartaoForm>();

  const onSubmit = (data: ICartaoForm) => {
    console.log(data);
  };

  return (
    <CartaoStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputComponent
          name="number"
          type="text"
          placeholder="Numero do cartão"
          register={register}
        />
        <div className="containerFormCartao">
          <InputComponent
            name="code"
            type="text"
            placeholder="Código de segurança"
            register={register}
          />
          <InputComponent
            name="date"
            type="text"
            placeholder="Vencimento: 02/24"
            register={register}
          />
        </div>
        <div className="buttonFormCartao">
          <ButtonAll type="submit" size="large" background="deft">
            Avançar para finalização
          </ButtonAll>
        </div>
      </form>
    </CartaoStyled>
  );
};
export default Cartao;
