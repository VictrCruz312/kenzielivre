import CardProduct from "../../../components/CardProduct";
import { ShowcaseStyled } from "./style";

import { useAuthSearch } from "../../../../Context/authProductSearch";

import { v4 as uuid } from "uuid";

const Showcase = () => {
  const {
    products,
    filterStateDescription,
    filterStateBrand,
    filterStateModel,
    filterStateCategory,
  } = useAuthSearch();

  return (
    <ShowcaseStyled>
      {filterStateDescription && filterStateDescription.length > 0
        ? filterStateDescription?.map(
            ({
              id,
              images,
              description,
              lastPrice,
              currentPrice,
              promotion,
            }: any) => (
              <CardProduct
                key={uuid()}
                id={id}
                src={images[0]}
                alt={description}
                lastValue={lastPrice}
                currentValue={currentPrice}
                description={description}
                promotion={promotion}
              />
            )
          )
        : filterStateBrand && filterStateBrand.length > 0
        ? filterStateBrand?.map(
            ({
              id,
              images,
              description,
              lastPrice,
              currentPrice,
              promotion,
            }: any) => (
              <CardProduct
                key={uuid()}
                id={id}
                src={images[0]}
                alt={description}
                lastValue={lastPrice}
                currentValue={currentPrice}
                description={description}
                promotion={promotion}
              />
            )
          )
        : filterStateModel && filterStateModel.length > 0
        ? filterStateModel?.map(
            ({
              id,
              images,
              description,
              lastPrice,
              currentPrice,
              promotion,
            }: any) => (
              <CardProduct
                key={uuid()}
                id={id}
                src={images[0]}
                alt={description}
                lastValue={lastPrice}
                currentValue={currentPrice}
                description={description}
                promotion={promotion}
              />
            )
          )
        : filterStateCategory && filterStateCategory.length > 0
        ? filterStateCategory?.map(
            ({
              id,
              images,
              description,
              lastPrice,
              currentPrice,
              promotion,
            }: any) => (
              <CardProduct
                key={uuid()}
                id={id}
                src={images[0]}
                alt={description}
                lastValue={lastPrice}
                currentValue={currentPrice}
                description={description}
                promotion={promotion}
              />
            )
          )
        : products?.map(
            ({
              id,
              images,
              description,
              lastPrice,
              currentPrice,
              promotion,
            }: any) => (
              <CardProduct
                key={uuid()}
                id={id}
                src={images[0]}
                alt={description}
                lastValue={lastPrice}
                currentValue={currentPrice}
                description={description}
                promotion={promotion}
              />
            )
          )}
    </ShowcaseStyled>
  );
};

export default Showcase;
