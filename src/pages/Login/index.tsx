import { ArrowRightStyled, LoginComponent, LoginContainer } from "./style";

import bgImg from '../../assets/background_image.svg';
import logo from '../../assets/logo.png'
import { useNavigate } from "react-router-dom";

export function Login(){
    const navigate = useNavigate();

    function handleSubmitLogin(){
        navigate('/home')
    }

    function handleGoToRegister(){
        navigate('/cadastro')
    }


    return (
        <LoginContainer>
            <LoginComponent>
                <img src={logo} />

                <form className="login-form" onSubmit={handleSubmitLogin}>
                    <p>Faça seu logon</p>
                    <input type="text" placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />
                    <div className="links-container">
                        <button type="submit" className="login-button">Entrar</button>
                        <a className="research-button" href="https://forms.gle/ACJxMeaESD4YAbAD6">
                            Sua opinião importa!
                        </a>
                    </div>
                </form>
                <form className="register-button" onSubmit={handleGoToRegister}>
                   <button>
                        <ArrowRightStyled 
                            size={32}
                        />
                        <span>Não tenho cadastro</span>
                   </button>
                </form>
            </LoginComponent>
            <img src={bgImg} className="background" />
        </LoginContainer>
    )
}