import Box from "../../components/Box";
import TransitionPage from "../../components/TransitionPage";
import { Block, FormStyled, RegisterStyled } from "./style";

import Select from "../../components/Select";
import { useForm } from "react-hook-form";
import Apresentation from "../../components/modalApresentacao";
import Input from "../../components/Inputs";
import Checkbox from "./components/Checkbox";
import { ButtonAll } from "../../components/Button";

export interface IDataRegister {
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
  type: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataRegister>();

  const onSubmit = (data: IDataRegister) => {
    console.log(data);
  };

  return (
    <TransitionPage>
      <RegisterStyled>
        <div className="MainRegister">
          <h1 className="block__logo">Kenzie Livre</h1>
          <Block>
            <Apresentation
              title="Não tem uma conta?"
              description="Cadastre-se já e encontre os melhores produtos pelo menor preço."
            />
          </Block>
          <Box width="small" minWidth="563px" widthMobile="100%" height="100%">
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
              <h2 className="form__title">Criar Conta</h2>

              <Input
                placeholder="Nome"
                type="text"
                isText
                name="nome"
                register={register}
                message={errors?.nome?.message}
              />
              <Input
                placeholder="Sobrenome"
                type="text"
                isText
                name="sobrenome"
                register={register}
                message={errors?.sobrenome?.message}
              />
              <Input
                placeholder="Email"
                type="text"
                isText
                name="email"
                register={register}
                message={errors.email?.message}
              />
              <Input
                placeholder="Senha"
                type="password"
                name="senha"
                register={register}
                message={errors.senha?.message}
              />
              <Input
                placeholder="Confirmar Senha"
                type="password"
                name="confirmarSenha"
                register={register}
                message={errors.confirmarSenha?.message}
              />
              <Select
                arrayText={["Vendedor", "Cliente"]}
                register={register}
                name="type"
                label="Tipo de conta"
              />
              <Checkbox />
              <ButtonAll background="deft" size="large">
                Criar conta
              </ButtonAll>
              <p className="form__optionsText">Já tem uma conta?</p>
              <ButtonAll background="transp" size="large">
                Entrar
              </ButtonAll>
            </FormStyled>
          </Box>
        </div>
      </RegisterStyled>
    </TransitionPage>
  );
};
export default Register;
