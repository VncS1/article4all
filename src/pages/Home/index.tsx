import { Header } from "./components/Header";
import { PetCard } from "./components/PetCard";
import { AdoptionListContainer, HomeContainer } from "./style";

export function Home(){
    return(
        <HomeContainer>
            <Header />
            <AdoptionListContainer>
                <PetCard
                    title="Edital de Bolsas 2024"
                    description="Este edital visa a concessão de bolsas de estudo para o ano de 2024. As bolsas são oferecidas para alunos de graduação e pós-graduação, cobrindo integralmente os custos de matrícula e mensalidade. Os candidatos devem possuir excelente desempenho acadêmico, com média mínima de 8.0 nas disciplinas cursadas. O prazo para submissão de candidaturas é 30 de setembro de 2024. Benefícios adicionais incluem auxílio para materiais didáticos e transporte."
                    university="Universidade de São Paulo"
                />
                <PetCard
                    title="Edital de Pesquisa Científica 2024"
                    description="Este edital destina-se à seleção de projetos de pesquisa científica para o ano de 2024. Serão aceitos projetos nas áreas de Ciências Exatas, Biológicas e Humanas. Os projetos aprovados receberão financiamento para a execução das atividades propostas, incluindo aquisição de materiais, viagens para conferências e publicação dos resultados. As propostas devem ser submetidas até 15 de outubro de 2024. Critérios de seleção incluem a relevância científica e o impacto potencial do projeto."
                    university="Universidade Federal do Rio de Janeiro"
                />
                <PetCard
                    title="Edital de Estágio 2024"
                    description="O presente edital abre inscrições para o programa de estágios 2024, destinado a alunos de graduação. O programa oferece oportunidades de estágio em diversas áreas como Engenharia, Administração, e Comunicação. Os estagiários receberão bolsa-auxílio mensal e terão a chance de participar de projetos reais dentro da universidade. Requisitos incluem estar matriculado a partir do segundo ano do curso e possuir disponibilidade mínima de 20 horas semanais. As inscrições vão até 30 de agosto de 2024."
                    university="Universidade Estadual de Campinas"
                />
                <PetCard
                    title="Edital de Intercâmbio 2024"
                    description="Este edital é para o programa de intercâmbio acadêmico 2024, oferecendo oportunidades para estudantes passarem um semestre em universidades parceiras no exterior. Os destinos incluem instituições na Europa, América do Norte, e Ásia. Os selecionados terão suas mensalidades cobertas e receberão uma ajuda de custo para despesas de viagem e estadia. Critérios de seleção incluem proficiência no idioma do país de destino e bom desempenho acadêmico. O prazo final para inscrição é 20 de julho de 2024."
                    university="Universidade de Brasília"
                />
                <PetCard
                    title="Edital de Extensão 2024"
                    description="O edital para projetos de extensão universitária 2024 está aberto para propostas que busquem integrar a universidade com a comunidade local. Serão financiados projetos que promovam a inclusão social, o desenvolvimento sustentável, e a inovação educacional. Os projetos devem demonstrar impacto positivo e potencial de transformação na comunidade. Submissões devem ser feitas até 10 de novembro de 2024, e os projetos selecionados receberão suporte técnico e financeiro para sua execução."
                    university="Universidade Federal de Minas Gerais"
                />
            </AdoptionListContainer>
        </HomeContainer>
    )
}