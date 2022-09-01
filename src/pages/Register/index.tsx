import Box from "../../components/Box"
import TransitionPage from "../../components/TransitionPage"
import { Block, RegisterStyled } from "./style"
import Form from "./components/Form"

import Select from "../../components/Select"
import { useForm } from "react-hook-form"
import Apresentation from "../../components/modalApresentacao"
import Input from "../../components/Inputs"
import Checkbox from "./components/Checkbox"
import { ButtonAll } from "../../components/Button"
import TextArea from "../../components/TextArea"
import { Button } from "@mui/material"
const Register = () => {

    const { register, handleSubmit } = useForm()

    const onSubmit = ( data:any ) => {
        console.log( data )
    }

    return(
        <TransitionPage>
            <RegisterStyled>
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
                >   
                    <Form onSubmit={handleSubmit(onSubmit)} name="Criar Conta">
                        <Input
                             placeholder="Nome"
                             type="text"
                             isText
                        />
                        <Input
                             placeholder="Sobrenome"
                             type="text"
                             isText
                        />
                        <Input
                             placeholder="Email"
                             type="text"
                             isText
                        />
                        <Input
                             placeholder="Senha"
                             type="password"
                        />
                        <Input
                             placeholder="Confirmar Senha"
                             type="password"
                        />
                        <Select
                            arrayText={["Vendedor", "Cliente"]}
                            register={register}
                            name="teste"
                            label="Tipo de conta"
                        />
                        <Checkbox/>
                        <ButtonAll background="deft" size="small">
                            Criar conta
                        </ButtonAll>
                        <p className="form__optionsText">Já tem uma conta?</p>
                        <ButtonAll background="transp" size="small">
                            Entrar
                        </ButtonAll>
                        <button type="submit">teste</button>
                    </Form>
                </Box>
            </RegisterStyled>
        </TransitionPage>
    )
}
export default Register