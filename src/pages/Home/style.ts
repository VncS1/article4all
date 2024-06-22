import { styled } from "styled-components";


export const HomeContainer = styled.main`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

`

export const AdoptionListContainer = styled.section `
    max-width: 70%;

    display: flex;
    justify-content: space-between;

    flex-wrap: wrap;

    gap: 2rem;

    @media(max-width: 800px){
        flex-direction: column;
        align-items: center;
    }

`