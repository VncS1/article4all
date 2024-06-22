import { HeaderContainer, PowerStyled } from "./style";

import logo from '../../../../assets/logo.png'
import { useNavigate } from "react-router-dom";


export function Header(){
    const navigate = useNavigate();

    function handleSubmitRegister(route: string){
        console.log("click")
        navigate(`${route}`)
    }

    return(
        <HeaderContainer>
            <div className="welcome-header">
                <img src={logo} />
                <p>Bem vindo(a), nome.</p>
            </div>
            <div className="buttons-container">
                <form className="form-pet-register" onSubmit={() => handleSubmitRegister('/cadastro-animal')}>
                    <button className="button-create">
                        Registrar Edital
                    </button>
                </form>
                <form className="form-logoff" onSubmit={() => handleSubmitRegister('/')}>
                    <button className="button-logoff">
                        <PowerStyled
                            size={32}
                        />
                    </button>
                </form>
            </div>
        </HeaderContainer>    
    )
}