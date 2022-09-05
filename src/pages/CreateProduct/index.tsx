import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Box from "../../components/Box";
import { ButtonAll } from "../../components/Button";
import Header from "../../components/Header";
import InputComponent from "../../components/Inputs";
import ModalApresentacao from "../../components/modalApresentacao";
import SelectEdited from "../../components/Select";
import TextArea from "../../components/TextArea";
import TransitionPage from "../../components/TransitionPage";
import { useAuth } from "../../Context/auth";
import CheckboxEdited from "../Register/components/Checkbox";
import {
  ContainterCreateProduct,
  CreateProductStyled,
  FormStyled,
} from "./style";

const CreateProduct = () => {
  interface IDataCreateProduct {
    marca: string;
    modelo: string;
    preco: string;
    cor: string;
    descricao: string;
    unidades: number;
    garantia: string;
  }

  const { checkAuth, checkLevelAuth } = useAuth()

  useEffect(()=>{ checkAuth(); checkLevelAuth() },[])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataCreateProduct>();

  const onSubmit = (data: IDataCreateProduct) => {
    console.log(data);
  };

  return (
    <TransitionPage>
      <CreateProductStyled>
        <Header onText={() => {}} />
        <ContainterCreateProduct>

            <ModalApresentacao
              title="Que tal cadastrar um novo produto?"
              description="e poder faturar de montão!"
            />

          <Box 
            width="small" 
            minWidth="563px" 
            widthMobile="100%" 
            height="large" 
            MediaQuery="1250px"
          >
            <FormStyled 
              onSubmit={handleSubmit(onSubmit)}
            >
              <h2 className="form__title">Criar Produto</h2>

              <div className="divInputs">
                <InputComponent
                  placeholder="Marca"
                  type="text"
                  isText
                  name="marca"
                  register={register}
                  message={errors?.marca?.message}
                />
                <InputComponent
                  placeholder="Modelo"
                  type="text"
                  isText
                  name="modelo"
                  register={register}
                  message={errors?.modelo?.message}
                />
                <InputComponent
                  placeholder="Preço"
                  type="text"
                  isText
                  name="preco"
                  register={register}
                  message={errors.preco?.message}
                />
                <InputComponent
                  placeholder="Cor"
                  type="text"
                  isText
                  name="cor"
                  register={register}
                  message={errors.cor?.message}
                />
                <TextArea
                  label="Descrição"
                  name="descricao"
                  register={register}
                  message={errors.descricao?.message}
                  size="small"
                />
                <InputComponent
                  placeholder="Unidades"
                  type="text"
                  isText
                  name="unidades"
                  register={register}
                  message={errors.unidades?.message}
                />
                <SelectEdited
                  arrayText={["6 Meses", "1 Ano", "2 Anos", "3 Anos"]}
                  register={register}
                  name="type"
                  label="Garantia"
                />
              </div>
              <div className="divInferior">
                <CheckboxEdited />
                <div className="divButtons">
                  <ButtonAll background="transp" size="large" type="button">
                    Adicionar mais imagens
                  </ButtonAll>
                  <ButtonAll background="deft" size="large" type="submit">
                    Criar anuncio
                  </ButtonAll>
                </div>
              </div>
            </FormStyled>
          </Box>
        </ContainterCreateProduct>
      </CreateProductStyled>
    </TransitionPage>
  );
};

export default CreateProduct;
