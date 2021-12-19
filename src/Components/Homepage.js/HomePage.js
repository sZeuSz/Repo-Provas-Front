import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ButtonChoice, ButtonsDiv, Card, CardChoice, Container, Main, ParagraphInf, SubTitle } from './HomePageStyled';
export default function HomePage() {

    const [visualize, setVisualize] = useState(false);
    const navigate = useNavigate();
    return (
        <><Container choice={visualize}>
            <Main>
                <Card>
                    <div>
                        <SubTitle>Procurando por uma prova de um professor específico para treinar?</SubTitle>
                        <ParagraphInf>Quem nunca procurou por provas antigas na faculdade para se preparar para prova de um professor e não achou ou pediu e o professor negou ? é, mas relaxa que eu estou colante nesse seu problema, escolha uma opção, usufrua, espalhe, contribua e seja feliz ♡.♡</ParagraphInf>
                    </div>
                    <ButtonsDiv>
                        <ButtonChoice onClick={() => setVisualize(true)}>Visualizar provas</ButtonChoice>
                        <ButtonChoice>Enviar provas</ButtonChoice>
                    </ButtonsDiv>
                </Card>
            </Main>
        </Container><CardChoice choice={visualize}>
                <ButtonsDiv>
                    <ButtonChoice onClick={() => navigate('/by-professors')}>Por professor</ButtonChoice>
                    <ButtonChoice onClick={() => navigate('/by-disciplines')}>Por disciplina</ButtonChoice>
                </ButtonsDiv>
        </CardChoice>
        </>
    )
}