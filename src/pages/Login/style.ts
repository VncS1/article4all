import { ArrowLineRight } from 'phosphor-react'
import styled from 'styled-components'

export const LoginContainer = styled.main`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    img.background {
        width: 45%;
    }

    @media (max-width: 1024px){
        flex-direction: column;

        img.background {
            display: none;
            opacity: 0;
        }
    }
`

export const LoginComponent = styled.section`
    width: 45%;
    height: 80vh;
    /* background: #000; */

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    padding: 3rem 5rem;

    img {
        width: 19rem;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 31rem;

        p {
            font-weight: bold;
            color: ${(props) => props.theme['black-gray']};
            font-size: 2.25rem;
            margin-top: 1.5rem;
        }

        input {
            margin-top: 1.5rem;
            border: 1px solid ${(props) => props.theme['gray-200']};
            padding: 1rem;
            background: ${(props) => props.theme.white};
            border-radius: 8px;
        }

        input::placeholder {
            font-size: 1.1rem;
            color: ${(props) => props.theme['gray-400']};
        }

        .links-container {
            width: 100%;

            display: flex;
            flex-direction: row;
            gap: .5rem;

            .login-button, .research-button {
                width: 50%;
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

            .research-button {
                font-size: 1.25rem;
                text-align: center;
            }
        }

        @media(max-width: 768px){
            .links-container {
                flex-direction: column;
                gap: 0;

                .login-button, .research-button {
                    width: 100%;
                }
            }
        }
    }

    .register-button {
        margin-top: 1rem;
        color: ${(props) => props.theme['black-gray']};
        font-weight: bold;
        cursor: pointer;

        button {
            display: flex;
            align-items: center;
            border: 0;
            background: transparent;
            
            cursor: pointer;
            p {
                margin-left: .5rem;
                font-weight: 500;
                font-size: 1.25rem;

                ;
                font-weight: bold;
            }
        }
    }

    @media (max-width: 1024px){
        width: 80%;

        img {
            width: 18rem;
        }
    }

    @media(max-width: 768px){
        width: 100%;
        img {
            width: 14rem;
        }
    }

`

export const ArrowRightStyled = styled(ArrowLineRight) `
    color: ${(props) => props.theme.orange};
`