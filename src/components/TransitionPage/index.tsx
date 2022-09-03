import { motion } from "framer-motion"
import { ReactNode } from "react"

interface IPropsTransitionPage {
    children:ReactNode
}

const TransitionPage = ( { children }:IPropsTransitionPage ) => {

    return(
        <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{delay:0.3}}
        >
            { children }
        </motion.div>
    )
}

export default TransitionPage