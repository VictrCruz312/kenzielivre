import { TrasitionStyled } from "./style";
import { ReactNode } from "react";

interface IPropsTransitionPage {
  children: ReactNode;
}

const TransitionPage = ({ children }: IPropsTransitionPage) => {
  return (
    <TrasitionStyled
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
    >
      {children}
    </TrasitionStyled>
  );
};

export default TransitionPage;
