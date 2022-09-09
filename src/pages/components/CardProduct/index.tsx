import { CardProductStyled } from "./style";
import { Information } from "./style";

interface IPropsCardProduct {
  id: number;
  src: string;
  alt: string;
  lastValue: number;
  currentValue: number;
  description: string;
  promotion?: boolean;
}

const CardProduct = ({
  id,
  src,
  alt,
  lastValue,
  currentValue,
  description,
  promotion,
}: IPropsCardProduct) => {
  return (
    <CardProductStyled to={`/home/${id}`}>
      <figure className="block">
        <img className="block__image" src={src} alt={alt} />
      </figure>
      <Information>
        <span>
          {promotion && (
            <p className="information__lastValue">R$ {Number(lastValue)?.toFixed(2)}</p>
          )}
          <p className="information__currentValue">
            R$ {Number(currentValue).toFixed(2) }
          </p>
        </span>
        <p className="information__product">{description}</p>
      </Information>
    </CardProductStyled>
  );
};

export default CardProduct;
