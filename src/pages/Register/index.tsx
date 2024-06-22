import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { ArrowLeftStyled, FormContainer, InfoContainer, RegisterContainer, TextContainer } from './style'
import { useEffect, useState } from 'react';

interface Preference {
    title: string;
}


export function Register(){

    const navigate = useNavigate();

    function handleSubmitRegister(){
        navigate('/')
    }

    const [preferences, setPreferences] = useState<Preference[]>([]);
    const [selectedPreference, setSelectedPreference] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('src/pages/Register/preferences.json');
            const data: Preference[] = await response.json();
            setPreferences(data);
        };

        fetchData();
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPreference(event.target.value);
    };

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
                    <select value={selectedPreference} onChange={handleChange}>
                    <option value="">Selecione...</option>
                        {preferences.map(preference => (
                        <option key={preference.title} value={preference.title}>
                            {preference.title}
                        </option>
                        ))}
                    </select>
                    
                    <button type="submit">Cadastrar</button>
                </FormContainer>
            </InfoContainer>
        </RegisterContainer>
    )
}