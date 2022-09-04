import TransitionPage from "../../components/TransitionPage";
import { LoginStyled } from "./style";
import Box from "../../components/Box";
import {} from "./style";

import { useForm } from "react-hook-form";
import Apresentation from "../../components/modalApresentacao";
import Input from "../../components/Inputs";
import { ButtonAll } from "../../components/Button";
import { Block, FormStyled } from "./style";
import { IDataLogin, useAuth } from "../../Context/auth"
import { useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate()
  const { login } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors:{ email, password } },
  } = useForm<IDataLogin>();

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
          <Box width="small" minWidth="563px" widthMobile="100%" MediaQuery="1250px">
            <FormStyled onSubmit={handleSubmit(login)}>
              <h2 className="form__title">Entrar</h2>

              <Input
                placeholder="Email"
                type="text"
                isText
                name="email"
                register={register}
                message={email?.message}
              />
              <Input
                placeholder="Senha"
                type="password"
                name="password"
                register={register}
                message={password?.message}
              />
              <div className="buttonOne">
                <ButtonAll background="deft" size="large" type="submit">
                  Entrar
                </ButtonAll>
              </div>
              <p className="form__optionsText">Não tem uma conta?</p>
              <div className="buttonTwo">
                <ButtonAll onCLick={()=> navigate("/register")} background="transp" size="large" type="button">
                  crie sua conta
                </ButtonAll>
              </div>
              <div className="buttonTree">
                <ButtonAll onCLick={()=> navigate("/home")} background="transp" size="large" type="button">
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
