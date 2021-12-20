import styled from 'styled-components';
import { useState, useEffect, useCallback} from 'react';
import { getDisciplinesRequest } from '../../Services/RepoProvas';
import { Card } from '../Homepage.js/HomePageStyled';
import DisciplinesComponent from './DisciplinesComponent';

export default function TestsByDisciplinesPage() {
    
    const [disciplines, setDisciplines] = useState(null);

    const renderDisciplines = useCallback(async () => {
        try {
            let disciplineResponse = await getDisciplinesRequest();
            console.log("acabouu",disciplineResponse);
            setDisciplines(disciplineResponse.data);
        } catch (error) {
            console.log(error);
        }
    },[])

    useEffect(() => {
        renderDisciplines();
    }, [renderDisciplines]);

    console.log('disciplines', disciplines)
    if (!disciplines?.length) {
        return '';
    }

    return (
        <>
            <CardGeneric>
                <ContainerCategory>
                {disciplines.name}
                {disciplines.map((discipline) => {
                    return (
                        <ContainerInfo>
                            <Discipline>{discipline.name}</Discipline>
                            {discipline.disciplines.map((discipline) => {
                                return (
                                    <DisciplinesComponent discipline={discipline.name} id={discipline.id} />
                                )
                            })}
                        </ContainerInfo>
                    )
                })}
                </ContainerCategory>
            </CardGeneric>
        </>
    )
}

const Discipline = styled.h2`
    font-size: 18px;
    color: #87CEEB;
    margin: 12px 0;
`;
const ContainerCategory = styled.div`
    background-color: #FF6347;
    width: 100%;
    height: 100%;
    word-break: break-word;
    text-align: center;
    border-radius: 10px 10px 10px 10px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    margin-bottom: 15px;
`;
const ContainerInfo = styled.a`
    width: 100%;
    min-height: 100px;
    /* background-color: purple; */
    /* margin: 15px 0px; */
    &:hover{
        cursor: pointer;
        filter: brightness(150%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 1.2), inset 0px 0px 0px 1px black;
    }
    border: 1px solid black;

    text-decoration:none;
    
`

const ContainerTests = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: blue; */
    background-color: #3A3A3A;
    /* border: 2px solid black; */

    width: 100%;
`








export const CardGeneric= styled(Card)`
    justify-content: flex-start;
    align-items: center;
    height: auto;
    width: 98%;
    margin: 15px 15px;
    min-height: 500px;
    max-width: none;

    button{
        position: relative;
        cursor:pointer;
        margin: 15px;
        transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s; /* Safari */
    }
    button:hover {
        transition-duration: 0.1s;
        background-color: #3A3A3A;
    }

    button:after {
        content: "";
        display: block;
        position: absolute;
        border-radius: 4em;
        left: 0;
        top:0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: all 0.5s;
        box-shadow: 0 0 10px 40px white;
    }

    button:active:after {
        box-shadow: 0 0 0 0 white;
        position: absolute;
        border-radius: 4em;
        left: 0;
        top:0;
        opacity: 1;
        transition: 0s;
    }

    button:active {
        top: 1px;
    }
    }
`;
