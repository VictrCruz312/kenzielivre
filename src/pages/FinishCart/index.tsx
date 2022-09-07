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
import { useAuth } from "../../Context/auth";
import { useCart } from "../../Context/Cart";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaResidence } from "../../validation/residence.validation";
import { createPurchases } from "../../services/api";
import { IPurchase } from "../../services/interface/purchase";

export interface IEndereco {
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
  const { listCart, cartao, pix, navigation, cartRemove } = useCart();

  const { checkAuth } = useAuth();

  const { leaveModalFunction } = useModal();
  useEffect(() => {
    leaveModalFunction();
    checkAuth("Logue para poder comprar", "/login");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEndereco>({
    resolver: yupResolver(schemaResidence),
  });

  const enviarEndereco = (data: IEndereco) => {
    const novoEndereco = {
      cep: data.cep,
      estado: data.estado,
      cidade: data.cidade,
      endereco: data.endereco,
      numero: data.numero,
      complemento: data.complemento || undefined,
      observação: data.observacao || undefined,
    };
    const user = JSON.parse(
      localStorage.getItem("@KenzieLivre:User") as string
    );

    const finishCart: IPurchase = {
      address: novoEndereco,
      purchase: listCart,
      userId: user.id,
      payment: Object.keys(cartao).length === 0 ? pix : cartao,
    };
    createPurchases(finishCart).then(() => {
      navigation("/home");
      cartRemove();
    });
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
