import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { ArrowLeftStyled, FormContainer, InfoContainer, RegisterContainer, TextContainer } from './style'

export function PetRegister(){
    const navigate = useNavigate();

    function routeToHome(){
        navigate('/home')
    }

    return (
        <RegisterContainer>
            <InfoContainer>
                <TextContainer>
                    <img src={logo} />
                    <h1>Registrar Edital</h1>
                    <p className="text-info">Cadastre o edital para que outras pessoas possam vê-lo, e caso tenham interesse, entrem em contato.</p>
                    <a href="/home" className="back-logon">
                        <ArrowLeftStyled
                            size={32}
                        />
                        <p>Voltar para a pagina inicial</p>
                    </a>
                </TextContainer>
                <FormContainer onSubmit={routeToHome}>
                    <input type="text" placeholder="Título do Edital" />
                    <input type="number" placeholder="Universidade" />
                    <input type="text" placeholder="Descrição" />
                    <button type="submit">Cadastrar</button>
                </FormContainer>
            </InfoContainer>
        </RegisterContainer>
    )
}