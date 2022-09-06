import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
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
import CheckboxEdited from "../Register/components/Checkbox";

import { useAuth } from "../../Context/auth";

import { createProduct } from "../../services/api";

import { shemaCreateProduct, shemaCreateProductCheck } from "../../validation/createProduct.validations";

import {
  ContainterCreateProduct,
  CreateProductStyled,
  FormStyled,
} from "./style";

import { v4 as uuid } from "uuid"
import { useModal } from "../../Context/Modal";

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

const CreateProduct = () => {

  const { leaveModalFunction } = useModal()
  useEffect(() => { checkAuth(); checkLevelAuth(); leaveModalFunction() }, []);

  const [promotion, setPromotion] = useState(false);
  const [ quantityImage, setQuantityImage ] = React.useState([1,])
  
  const { checkAuth, checkLevelAuth } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataCreateProduct>({
    resolver: promotion ? 
      yupResolver(shemaCreateProductCheck) :
      yupResolver(shemaCreateProduct)
  });

  const handleCreateProduct = ( propertiesData: IDataCreateProduct) => {

    const user = JSON.parse( localStorage.getItem("@KenzieLivre:User") as string )

    let arrFiltradoImage = []
    let objFinaly = {}

    for(let i in propertiesData ){
      if(  i.includes( "image" ) ){
        // @ts-ignore ou // @ts-expect-error
        arrFiltradoImage.push( propertiesData[i]  )
      }else{
        // @ts-ignore ou // @ts-expect-error
        objFinaly[i] = propertiesData[i]
      }
    }
    // @ts-ignore ou // @ts-expect-error
    objFinaly.images = arrFiltradoImage
    // @ts-ignore ou // @ts-expect-error
    objFinaly.userId = user.id

    createProduct(objFinaly)
      .then((_) => {
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
            <FormStyled onSubmit={handleSubmit(handleCreateProduct)}>
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
                {promotion&&<InputComponent
                  placeholder="Preço anterior"
                  type="text"
                  isText
                  name="lastPrice"
                  register={register}
                  message={errors.currentPrice?.message}
                />}
                <InputComponent
                  placeholder="Preço atual"
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
                  arrayText={["Tecnologia", "Limpeza", "Moda", "Moveis", "Ferramentas", "Eletromesticos", "Brinquedos"]}
                  register={register}
                  name="category"
                  label="Categoria"
                  message={errors?.category?.message}
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
                  message={errors.warranty?.message}
                />
                {
                   quantityImage.map( ( value:number, indice )=> 
                    
                    <InputComponent
                      key={uuid()}
                      placeholder="Imagens"
                      type="text"
                      isText
                      name={`image${indice}`}
                      register={register}
                      message={errors.images?.message}
                    />
                    
                    )
                }
              </div>
              <div className="divInferior">
                <CheckboxEdited 
                  nameDescription="Promoção"
                  onChange={ ( check ) => setPromotion( check )}
                  name="promotion"
                  register={register}
                  message={errors?.promotion?.message}
                />
                <div className="divButtons">
                  <ButtonAll onCLick={()=>{  setQuantityImage(()=>[...quantityImage, 1]) }} background="transp" size="large" type="button">
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
