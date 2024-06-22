import { styled } from "styled-components";

export const PetCardContainer = styled.div`
    width: 45%;
    height: auto;

    background-color: ${(props) => props.theme.gray};

    display: flex;
    flex-direction: column;
    padding: 1rem;

    border-radius: 10px;

    box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.1);

    .info-container {
        padding: .5rem 1rem;
        display: flex;
        flex-direction: column;
        color: ${(props) => props.theme['black-gray']};


        h4 {
            margin-top: 1rem;
        }

        p {
            margin-top: .5rem;
            color: ${(props) => props.theme['dark- gray']};
        }
    }

    .more-infos {
        display: flex;
        justify-content: space-between;

        margin-top: 1rem;
        padding: 0 1rem;
        .button-info {
            border: 0;
            border-radius: 6px;
            cursor: pointer;

            padding: 1rem 3.5rem;

            background-color: ${(props) => props.theme.orange};
            color: ${(props) => props.theme.white};
            font-weight: bold;
        }

        .button-delete {
            border: 0;
            cursor: pointer;
            background-color: transparent;
        }
    }

    @media(max-width: 800px){
        width: 70%;
    }
    
    @media(max-width: 767px){
        width: 100%;
    }
`