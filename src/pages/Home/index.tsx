import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { PetCard } from "./components/PetCard";
import { AdoptionListContainer, HomeContainer } from "./style";

interface Edital {
    id: number;
    title: string;
    description: string;
    university: string;
}

export function Home(){
    const [editais, setEditais] = useState<Edital[]>([]);

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch('src/pages/Home/edital.json');
        const data: Edital[] = await response.json();
        setEditais(data);
        };

        fetchData();
    }, []);
    

    return(
        <HomeContainer>
            <Header />
            <AdoptionListContainer>
            {editais.map(edital => (
                <PetCard
                    title={edital.title}
                    description={edital.description}
                    university={edital.university}
                    key={edital.id}
                />
            ))} 
            </AdoptionListContainer>
        </HomeContainer>
    )
}