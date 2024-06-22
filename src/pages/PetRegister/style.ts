import { ArrowLeft } from 'phosphor-react'
import styled from 'styled-components'

export const RegisterContainer = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;
`

export const InfoContainer = styled.section`
    width: 70%;
    height: 80vh;

    background-color: ${(props) => props.theme.gray};
    border-radius: 10px;
    box-shadow: 4px 4px 10px 5px rgba(0,0,0,0.2);

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 5rem;

    @media (max-width: 1024px){
        flex-direction: column;
        width: 90%;
        height: auto;

        padding: 2rem;
    }
`

export const TextContainer = styled.section`
    max-width: 45%;

    img {
        width: 15rem;
    }

    h1 {
        font-weight: medium;
        color: ${(props) => props.theme['black-gray']};
        font-size: 2.5rem;

        margin-top: 1rem;
    }

    p.text-info {
        margin-top: 1rem;
        line-height: 24px;
    }

    .back-logon {
        display: flex;
        align-items: center;

        margin-top: 1rem;

        color: ${(props) => props.theme['black-gray']};
        font-weight: bold;

        p {
            margin-left: .5rem;
        }
    }

    @media (max-width: 1024px){
        max-width: 90%;

        img {
            width: 10rem;
        }
    }
`

export const FormContainer = styled.form`
    width: 45%;
    display: flex;
    flex-direction: column;



    input {
        margin-top: 1.5rem;
        border: 1px solid ${(props) => props.theme['gray-200']};
        padding: 1rem;
        background: ${(props) => props.theme.white};
        border-radius: 8px;

        width: 100%;
    }

    input::placeholder {
        font-size: 1.1rem;
        color: ${(props) => props.theme['gray-400']};
    }

    button {
        border: 0;
        border-radius: 8px;
        cursor: pointer;

        margin-top: 2rem;
        padding: 1rem;

        background-color: ${(props) => props.theme.orange};
        color: ${(props) => props.theme.white};
        font-weight: bold;
        font-size: 1.60rem;
    }

    @media (max-width: 1024px){
        width: 80%;
    }
`

export const ArrowLeftStyled = styled(ArrowLeft)`
    color: ${(props) => props.theme.orange};
`