import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Box from "../../components/Box";
import { ButtonAll } from "../../components/Button";
import Header from "../../components/Header";
import InputComponent from "../../components/Inputs";
import ModalApresentacao from "../../components/modalApresentacao";
import SelectEdited from "../../components/Select";
import TextArea from "../../components/TextArea";
import TransitionPage from "../../components/TransitionPage";
import { useAuth } from "../../Context/auth";
import { createProduct } from "../../services/api";
import { shemaCreateProduct } from "../../validation/createProduct.validations";
import CheckboxEdited from "../Register/components/Checkbox";
import {
  ContainterCreateProduct,
  CreateProductStyled,
  FormStyled,
} from "./style";

const CreateProduct = () => {
  const [promotion, setPromotion] = useState(false);

  const navigate = useNavigate();

  const User = JSON.parse(localStorage.getItem("@KenzieLivre:User") as string);

  interface IDataCreateProduct {
    Userid: number;
    brand: string;
    category: string;
    color: string;
    currentPrice: number;
    description: string;
    images: string[];
    lastPrice?: number;
    model: string;
    promotion?: boolean;
    quantity: number;
    warranty: string;
  }

  const { checkAuth, checkLevelAuth } = useAuth();

  useEffect(() => {
    checkAuth();
    checkLevelAuth();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataCreateProduct>({
    resolver: yupResolver(shemaCreateProduct),
  });

  const handleCreateUser = ({ ...propertiesData }: IDataCreateProduct) => {
    createProduct(propertiesData)
      .then((_) => {
        console.log(propertiesData);
        toast.success("Produto cadastrado");
        navigate("/home");
      })
      .catch((_) => {
        toast.error("Produto não cadastrado");
      });
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
            <FormStyled onSubmit={handleSubmit(handleCreateUser)}>
              <h2 className="form__title">Criar Produto</h2>

              <div className="divInputs">
                <InputComponent
                  placeholder="Marca"
                  type="text"
                  isText
                  name="brand"
                  register={register}
                  message={errors?.brand?.message}
                />
                <InputComponent
                  placeholder="Modelo"
                  type="text"
                  isText
                  name="model"
                  register={register}
                  message={errors?.model?.message}
                />
                <InputComponent
                  placeholder="Preço"
                  type="text"
                  isText
                  name="currentPrice"
                  register={register}
                  message={errors.currentPrice?.message}
                />
                <InputComponent
                  placeholder="Cor"
                  type="text"
                  isText
                  name="color"
                  register={register}
                  message={errors.color?.message}
                />
                <TextArea
                  label="Descrição"
                  name="description"
                  register={register}
                  message={errors.description?.message}
                  size="small"
                />
                <SelectEdited
                  arrayText={["Eletronico", "Limpesa"]}
                  register={register}
                  name="category"
                  label="Categoria"
                />
                <InputComponent
                  placeholder="Unidades"
                  type="text"
                  isText
                  name="quantity"
                  register={register}
                  message={errors.quantity?.message}
                />
                <SelectEdited
                  arrayText={["6 Meses", "1 Ano", "2 Anos", "3 Anos"]}
                  register={register}
                  name="warranty"
                  label="Garantia"
                />
                <InputComponent
                  placeholder="Imagens"
                  type="text"
                  isText
                  name="images"
                  register={register}
                  message={errors.images?.message}
                />
              </div>
              <div className="divInferior">
                <CheckboxEdited 
                  onChange={ ( check ) => {}}
                />
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
