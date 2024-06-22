import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { ArrowLeftStyled, FormContainer, InfoContainer, RegisterContainer, TextContainer } from './style'


export function Register(){
    const navigate = useNavigate();

    function handleSubmitRegister(){
        navigate('/')
    }

    return (
        <RegisterContainer>
            <InfoContainer>
                <TextContainer>
                    <img src={logo} />
                    <h1>Crie sua conta</h1>
                    <p className="text-info">Faça seu cadastro, entre na plataforma e encontre editais de projetos 
                        de diversas universidades para aprimorar seus conhecimentos.</p>
                    <a href="/" className="back-logon">
                        <ArrowLeftStyled
                            size={32}
                        />
                        <p>Voltar para o logon</p>
                    </a>
                </TextContainer>
                <FormContainer onSubmit={handleSubmitRegister}>
                    <input type="text" placeholder="E-mail" />
                    <input type="text" placeholder="Senha" />
                    <select>
                        <option value="">Selecione...</option>

                        <option value="Inovação e Tecnologia">
                            Inovação e Tecnologia
                        </option>
                        <option value="Sustentabilidade e Meio Ambiente">
                            Sustentabilidade e Meio Ambiente
                        </option>
                        <option value="Saúde e Biotecnologia">
                            Saúde e Biotecnologia
                        </option>
                        <option value="Ciências Sociais e Humanas">
                            Ciências Sociais e Humanas
                        </option>
                        <option value="Educação e Pedagogia">
                            Educação e Pedagogia
                        </option>
                        <option value="Economia e Gestão">
                            Economia e Gestão
                        </option>
                        <option value="Direito e Ciências Jurídicas">
                            Direito e Ciências Jurídicas
                        </option>
                        <option value="Inteligência Artificial">
                            Inteligência Artificial
                        </option>
                        <option value="Cibersegurança e Privacidade">
                            Cibersegurança e Privacidade
                        </option>
                        <option value="Urbanização e Desenvolvimento Urbano">
                            Urbanização e Desenvolvimento Urbano
                        </option>
                        <option value="Neurociências e Comportamento">
                            Neurociências e Comportamento
                        </option>
                        <option value="Arquitetura e Design">
                            Arquitetura e Design
                        </option>
                        <option value="Ciência de Dados e Análise">
                            Ciência de Dados e Análise
                        </option>
                    </select>
                    
                    <button type="submit">Cadastrar</button>
                </FormContainer>
            </InfoContainer>
        </RegisterContainer>
    )
}