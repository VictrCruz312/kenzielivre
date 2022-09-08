import { Avatar } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../../Context/auth"
import { IUserCliente } from "../../../../services/interface/User"
import { ButtonAll } from "../../../Button"
import { ProfileStyled } from "./style"

const Profile = () => {

    const navigate = useNavigate()
    const { isAuth, logout } = useAuth()
    const [ user, setUser ] = useState<IUserCliente>()

    useEffect(()=>{

        const user = JSON.parse( localStorage.getItem("@KenzieLivre:User") as string )
        user&&setUser( user )

    },[isAuth])

    return(
        <ProfileStyled>
            <div className="profile__information">
                <Avatar 
                    alt={isAuth ? user?.name : ""}
                    src={isAuth ? user?.profileImage : ""}
                    sx={{ width: 90, height: 90 }}
                    variant="rounded"
                />
                <div className="information__text">
                    <p className="text__title">Bem vindo</p>
                    <p className="text__description">
                        { isAuth ? `${user?.name} ${user?.lastname}`  : "Entre para utilizar as funcionalidades do KenzieLivre"}
                    </p>
                </div>
            </div>
            {!isAuth&&(<nav className="profile__navegation">
                <ButtonAll
                    onCLick={()=>navigate("/login")}
                    type="button"
                    background="deft"
                    size="large"
                >
                    Entre
                </ButtonAll>
                <ButtonAll
                     onCLick={()=>navigate("/register")}
                    type="button"
                    background="transp"
                    size="large"
                >
                    Crie sua conta
                </ButtonAll>
            </nav>)}
            {isAuth&&(<nav className="profile__navegation--logged">
                <ButtonAll
                    onCLick={logout}
                    type="button"
                    background="transp"
                    size="large"
                >
                    Sair
                </ButtonAll>
            </nav>)}
        </ProfileStyled>
    )
}

export default Profile