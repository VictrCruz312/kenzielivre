import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IPropsTransitionPage {
  children: ReactNode;
}

const TransitionPage = ({ children }: IPropsTransitionPage) => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ delay: 0, duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionPage;
