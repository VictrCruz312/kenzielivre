import Box from "../../components/Box";
import Header from "../../components/Header";
import TransitionPage from "../../components/TransitionPage";
import DetailCartFinal from "./components/DetailCartFinal";
/* import FormEndereco from "./components/FormEndereco"; */
import ListCheckeds from "./components/ListCheckeds";
import { FinishCartStyled, ContainerForm, FormStyled } from "./style";

import { useForm } from "react-hook-form";
import InputComponent from "../../components/Inputs";
import TextArea from "../../components/TextArea";
import { useEffect } from "react";
import { useModal } from "../../Context/Modal";

interface IEndereco {
  cep: string;
  estado: string;
  cidade: string;
  endereco: string;
  numero: string;
  complemento?: string;
  observacao?: string;
}

export interface IEnvioEndereco {
  enviarEndereco: (props: IEndereco) => void;
}

const FinishCart = () => {

  const { leaveModalFunction } = useModal()
  useEffect(()=>leaveModalFunction(),[])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEndereco>();

  const enviarEndereco = (data: IEndereco) => {
    const novoEndereco = {
      cep: data.cep,
      estado: data.estado,
      cidade: data.cidade,
      endereço: data.endereco,
      numero: data.numero,
      complemento: data.complemento || undefined,
      observação: data.observacao || undefined,
    };
    console.log(novoEndereco);
  };

  return (
    <TransitionPage>
      <FinishCartStyled>
        <Header onText={() => "teste"} />
        <div className="mainContainer">
          <Box
            width="large"
            height="100%"
            widthMobile="100%"
            MediaQuery="1250px"
          >
            <ListCheckeds />
            <FormStyled onSubmit={handleSubmit(enviarEndereco)}>
              <div className="cardConteudo">
                <ContainerForm>
                  <h2>Endereço</h2>
                  <div className="containerInputs">
                    <InputComponent
                      placeholder="CEP"
                      type="text"
                      isText
                      name="cep"
                      message={errors?.cep?.message}
                      register={register}
                    />
                    <InputComponent
                      placeholder="Estado"
                      type="text"
                      isText
                      name="estado"
                      message={errors?.estado?.message}
                      register={register}
                    />
                  </div>
                  <div className="containerInputs">
                    <InputComponent
                      placeholder="Cidade"
                      type="text"
                      isText
                      name="cidade"
                      message={errors?.cidade?.message}
                      register={register}
                    />
                    <InputComponent
                      placeholder="Endereço"
                      type="text"
                      isText
                      name="endereco"
                      message={errors?.endereco?.message}
                      register={register}
                    />
                  </div>
                  <div className="containerInputs numAndComplement">
                    <div className="num">
                      <InputComponent
                        placeholder="Numero"
                        type="text"
                        isText
                        name="numero"
                        message={errors?.numero?.message}
                        register={register}
                      />
                    </div>
                    <div className="complement">
                      <InputComponent
                        placeholder="Complemento"
                        type="text"
                        isText
                        name="complemento"
                        message={errors?.complemento?.message}
                        register={register}
                      />
                    </div>
                  </div>
                  <div className="containerTextArea">
                    <TextArea
                      label="Observação"
                      name="observacao"
                      register={register}
                      message={errors?.observacao?.message}
                      size="medium"
                    />
                  </div>
                </ContainerForm>
                <div className="divisaoFunction"></div>
                <DetailCartFinal />
              </div>
            </FormStyled>
          </Box>
        </div>
      </FinishCartStyled>
    </TransitionPage>
  );
};
export default FinishCart;
