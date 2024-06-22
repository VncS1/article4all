import { Power } from "phosphor-react";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between; 
    align-items: center;

    width: 70%;

    padding: 2rem 0;

    .welcome-header {
        display: flex;
        align-items: center;

        img {
            width: 8.4rem;
        }

        p {
            margin-left: 1rem;
            font-weight: 1.5rem;
            color: ${(props) => props.theme['black-gray']};
            font-weight: 500;
        }
    }

    .buttons-container {
        display: flex;
        align-items: center;

        form {
            margin-left: 1rem;
        }


        .form-pet-register {
            cursor: pointer;
            .button-create {
                border: 0;
                border-radius: 8px;

                cursor: pointer;

                padding: 1rem;

                background-color: ${(props) => props.theme.orange};
                color: ${(props) => props.theme.white};
                font-weight: bold;
            }
        }

        .form-logoff {
            cursor: pointer;
            .button-logoff {
                border: 1px solid ${(props) => props.theme.gray};
                border-radius: 6px;
                cursor: pointer;

                padding: .5rem;

                background-color: transparent;
                color: ${(props) => props.theme['black-gray']};
                font-weight: bold;

                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }

    @media(max-width:767px){
        width: 100%;
        flex-direction: column;

        .buttons-container {
            margin-top: 1rem;
        }
    }
`

export const PowerStyled = styled(Power)`
    color: ${(props) => props.theme.orange}
`