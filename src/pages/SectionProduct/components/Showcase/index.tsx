import CardProduct from "../../../components/CardProduct";
import { ShowcaseStyled } from "./style";

import { useAuthSearch } from "../../../../Context/authProductSearch";

import { v4 as uuid } from "uuid";

const Showcase = () => {
  const {
    products,
    productFilter
  } = useAuthSearch();

  return (
    <ShowcaseStyled>

    {
      productFilter.length != 0 ? productFilter.map(
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
      :
      
      products?.map(
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
      }
    </ShowcaseStyled>
  );
};

export default Showcase;
