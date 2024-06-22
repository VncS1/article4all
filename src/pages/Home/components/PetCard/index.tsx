import { PetCardContainer } from "./style";

import { Trash } from "phosphor-react";

interface PetCardProps {
    //id: number,
    title: string,
    description: string,
    university: string
}

export function PetCard({ title, description, university }: PetCardProps){
    
    function navigatePetDetail(){
        alert('Download iniciado!');
    }

    return (
        <PetCardContainer>
            <div className="info-container">
                <h3>{title}, {university} anos</h3>

                <h4>Descrição</h4>
                <p>{description}</p>
            </div>
            <form className="more-infos" onSubmit={navigatePetDetail}>
                <button type="submit" className="button-info">Download</button>
                <button className="button-delete">
                    <Trash 
                        size={32}
                        color="#737380"
                    />
                </button>
            </form>
        </PetCardContainer>
    )
}