import { useModal } from "../../Context/Modal"
import List from "./components/List"
import Profile from "./components/Profile"

import { ModalStyled } from "./style"

const Modal = () => {

    const { isleaveGlobal } = useModal()

    return(
        <ModalStyled isleaveGlobal={isleaveGlobal}>
            <Profile/>
            <List/>
        </ModalStyled>
    )
}

export default Modal