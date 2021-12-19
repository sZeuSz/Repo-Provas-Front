import styled from 'styled-components';
import { ButtonChoice, Card } from '../Homepage.js/HomePageStyled';

export default function TestsByProfessorPage() {
    
    const pf = [{ name: 'Eulanda', proves: '36' }];

    const av = [
        {
            av: 'P1',
            proves: [
                {
                    disciplineName: 'Geografia',
                    name: '2020.1',
                    link: 'www.google.pdf'
                }
            ]
        }
    ];

    // , { av: 'P2' }, { av: 'P3' }, { av: '2ch' }, { av: 'Outras' } ];
    return (
        <>
        <CardGeneric>
            {pf.map((e) => <ButtonChoice>{e.name} ({e.proves})</ButtonChoice>)}
        </CardGeneric>
        <CardGeneric>
                {av.map((e) => <ButtonChoice>{e.av} {e.proves.map((prova) => { return <ButtonChoice>{prova.disciplineName} <p>{prova.name}</p> <p>{prova.link}</p></ButtonChoice> })}</ButtonChoice>)}
        </CardGeneric>
        </>
    )
}
// P1 P2 P3 2CH Outras
const CardGeneric= styled(Card)`
    justify-content: flex-start;
    align-items: center;
    max-width: 25%;
    margin: 15px;
`;
