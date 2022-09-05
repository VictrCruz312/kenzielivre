import InputComponent from "../../../../components/Inputs";
import { CartaoStyled } from "./style";
import { useForm } from "react-hook-form";

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
        <InputComponent
          name="code"
          type="text"
          placeholder="Numero do cartão"
          register={register}
        />
        <InputComponent
          name="date"
          type="text"
          placeholder="Vencimento: 02/24"
          register={register}
        />
      </form>
    </CartaoStyled>
  );
};
export default Cartao;
