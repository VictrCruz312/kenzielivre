import { useModal } from "../../Context/Modal"
import List from "./components/List"
import Profile from "./components/Profile"

import { ModalStyled } from "./style"

const Modal = () => {

    const { isModalGlobal } = useModal()

    return(
        <ModalStyled isModalGlobal={isModalGlobal}>
            <Profile/>
            <List/>
        </ModalStyled>
    )
}

export default Modal