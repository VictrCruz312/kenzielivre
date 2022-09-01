import TransitionPage from "../../components/TransitionPage";
import { LoginStyled } from "./style";
import Box from "../../components/Box";
import {} from "./style";

import { useForm } from "react-hook-form";
import Apresentation from "../../components/modalApresentacao";
import Input from "../../components/Inputs";
import { ButtonAll } from "../../components/Button";
import { Block, FormStyled } from "./style";

interface IDataLogin {
  email: string;
  senha: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataLogin>();

  const onSubmit = (data: IDataLogin) => {
    console.log(data);
  };

  return (
    <TransitionPage>
      <LoginStyled>
        <div className="MainLogin">
          <h1 className="block__logo">Kenzie Livre</h1>
          <Block>
            <Apresentation
              title="Que tal fazer login?"
              description="Para poder aproveitar ao maximo seu tempo aqui."
            />
          </Block>
          <Box width="small" minWidth="563px" widthMobile="100%">
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
              <h2 className="form__title">Entrar</h2>

              <Input
                placeholder="Email"
                type="text"
                isText
                name="email"
                register={register}
                message={errors?.email?.message}
              />
              <Input
                placeholder="Senha"
                type="password"
                name="senha"
                register={register}
                message={errors?.senha?.message}
              />
              <div className="buttonOne">
                <ButtonAll background="deft" size="large">
                  Entrar
                </ButtonAll>
              </div>
              <p className="form__optionsText">Não tem uma conta?</p>
              <div className="buttonTwo">
                <ButtonAll background="transp" size="large">
                  crie sua conta
                </ButtonAll>
              </div>
              <div className="buttonTree">
                <ButtonAll background="transp" size="large">
                  Entrar sem logar
                </ButtonAll>
              </div>
            </FormStyled>
          </Box>
        </div>
      </LoginStyled>
    </TransitionPage>
  );
};
export default Login;
