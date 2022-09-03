import { Avatar } from "@mui/material"
import { ButtonAll } from "../../../Button"
import { ProfileStyled } from "./style"

const Profile = () => {

    return(
        <ProfileStyled>
            <div className="profile__information">
                <Avatar 
                    alt="" 
                    src="" 
                    sx={{ width: 90, height: 90 }}
                    variant="rounded"
                />
                <div className="information__text">
                    <p className="text__title">Bem vindo</p>
                    <p className="text__description">Entre para utilizar as funcionalidades do KenzieLivre</p>
                </div>
            </div>
            <nav className="profile__navegation">
            <ButtonAll
                    type="button"
                    background="deft"
                    size="large"
                >
                    Crie sua conta
                </ButtonAll>
                <ButtonAll
                    type="button"
                    background="transp"
                    size="large"
                >
                    Crie sua conta
                </ButtonAll>
            </nav>
            {/* <nav className="profile__navegation--logged">
                <ButtonAll
                    type="button"
                    background="transp"
                    size="large"
                >
                    Sair
                </ButtonAll>
            </nav> */}
        </ProfileStyled>
    )
}

export default Profile