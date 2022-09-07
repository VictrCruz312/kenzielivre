import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IPropsTransitionPage {
  children: ReactNode,
  loading:boolean,
}

const TransitionPage = ({ children }: IPropsTransitionPage) => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{opacity:1}}
      transition={{ delay:0.7 }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionPage;
