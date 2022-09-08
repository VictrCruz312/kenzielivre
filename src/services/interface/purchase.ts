import { IProductCart } from "../../Context/Cart";
import { ICartaoForm } from "../../pages/Cart/components/Cartao";
import { IEndereco } from "../../pages/FinishCart";

export interface IPurchase {
  address: IEndereco;
  purchase: IProductCart[];
  userId: number;
  payment: string | ICartaoForm | {};
}
