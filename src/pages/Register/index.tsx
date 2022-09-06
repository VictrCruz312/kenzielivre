import Box from "../../components/Box";
import TransitionPage from "../../components/TransitionPage";
import { Block, FormStyled, RegisterStyled } from "./style";

import Select from "../../components/Select";
import { useForm } from "react-hook-form";
import Apresentation from "../../components/modalApresentacao";
import Input from "../../components/Inputs";
import Checkbox from "./components/Checkbox";
import { ButtonAll } from "../../components/Button";
import { useRequest } from "../../Context/Request";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  shemaRegisterCliente,
  shemaRegisterVendedor,
} from "../../validation/register.validation";
import toast from "react-hot-toast";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/auth";

export interface IDataRegister {
  name: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  auth: string;
  profileImage: string;
  imageLogo: string;
}

const Register = () => {
  const [auth, setAuth] = React.useState("");
  const [acceptTerm, setAcceptTerm] = React.useState(false);

  const { createUser } = useRequest();
  const { login } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataRegister>({
    resolver:
      auth === "Cliente"
        ? yupResolver(shemaRegisterCliente)
        : yupResolver(shemaRegisterVendedor),
  });

  const handleCreateUser = ({
    confirmPassword,
    ...propertiesData
  }: IDataRegister) => {
    createUser(propertiesData)
      .then((_) => {
        const { email, password } = propertiesData;
        toast.success("Usuario cadastrado");

        login({ email, password });

        navigate("/login");
      })
      .catch((_) => {
        toast.error("Email já existe");
      });
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
          <Box
            width="small"
            minWidth="563px"
            widthMobile="100%"
            height="100%"
            MediaQuery="1250px"
          >
            <FormStyled onSubmit={handleSubmit(handleCreateUser)}>
              <h2 className="form__title">Criar Conta</h2>

              <Input
                placeholder="Nome"
                type="text"
                isText
                name="name"
                register={register}
                message={errors?.name?.message}
              />
              <Input
                placeholder="Sobrenome"
                type="text"
                isText
                name="lastname"
                register={register}
                message={errors?.lastname?.message}
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
                name="password"
                register={register}
                message={errors.password?.message}
              />
              <Input
                placeholder="Confirmar Senha"
                type="password"
                name="confirmPassword"
                register={register}
                message={errors.confirmPassword?.message}
              />
              <Select
                arrayText={["Vendedor", "Cliente"]}
                register={register}
                name="auth"
                label="Tipo de conta"
                onChange={(e) => setAuth(e.target.value)}
                message={errors?.auth?.message}
              />
              <Input
                placeholder="URL imagem do perfil"
                type="text"
                isText
                name="profileImage"
                register={register}
                message={errors.profileImage?.message}
              />
              {auth === "Vendedor" && (
                <Input
                  placeholder="URL Logo"
                  register={register}
                  message={errors.imageLogo?.message}
                  name="imageLogo"
                  isText
                  type="text"
                />
              )}
              <Checkbox onChange={(check) => setAcceptTerm(check)} />
              <ButtonAll
                onCLick={() => !acceptTerm && toast.error("Aceite os termos")}
                background="deft"
                size="large"
                type={acceptTerm ? "submit" : "button"}
              >
                Criar conta
              </ButtonAll>

              <p className="form__optionsText">Já tem uma conta?</p>

              <ButtonAll
                onCLick={() => navigate("/login")}
                background="transp"
                size="large"
                type="button"
              >
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
