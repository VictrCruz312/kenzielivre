import InputComponent from "../../../../components/Inputs";
import { CartaoStyled } from "./style";
import { useForm } from "react-hook-form";
import { ButtonAll } from "../../../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCart } from "../../../../Context/Cart";

export interface ICartaoForm {
  number: string;
  code: string;
  date: string;
}

const Cartao = () => {
  const { saveCartao, navigation } = useCart();

  const formSchema = yup.object().shape({
    number: yup.string().required("número do cartão é requerido"),
    code: yup.string().required("código é obrigatório"),
    date: yup.string().required("vencimento é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICartaoForm>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: ICartaoForm) => {
    saveCartao(data);
    navigation("/cart/finishCart");
  };

  return (
    <CartaoStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputComponent
          message={errors?.number?.message}
          name="number"
          type="text"
          placeholder="Numero do cartão"
          register={register}
        />
        <div className="containerFormCartao">
          <InputComponent
            message={errors?.code?.message}
            name="code"
            type="text"
            placeholder="Código de segurança"
            register={register}
          />
          <InputComponent
            message={errors?.date?.message}
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
