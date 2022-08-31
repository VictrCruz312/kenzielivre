import { ContainerModalApresentacao } from "./style";

interface IPropsModal {
  title: string;
  description: string;
}

const ModalApresentacao = ({ title, description }: IPropsModal) => {
  return (
    <ContainerModalApresentacao>
      <div className="divModalApresentacao">
        <h1>{title}</h1>
        <h4>{description}</h4>
      </div>
    </ContainerModalApresentacao>
  );
};
export default ModalApresentacao;
