import List from "./components/List"
import Profile from "./components/Profile"

import { ModalStyled } from "./style"

const Modal = () => {

    return(
        <ModalStyled>
            <Profile/>
            <List/>
        </ModalStyled>
    )
}

export default Modal