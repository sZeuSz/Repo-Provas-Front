import styled from 'styled-components';
import { getProfessorsRequest, getProfessorsTestsRequest } from '../../Services/RepoProvas';
import { ButtonChoice, Card } from '../Homepage.js/HomePageStyled';
import { useState, useEffect, useCallback, useMemo} from 'react';
import ProfessorsComponent from './ProfessorsComponent';

export default function TestsByProfessorPage() {
    
    const [professors, setProfessors] = useState(null);

    const renderProfessors = useCallback(async () => {
        try {
            let professorsResponse = await getProfessorsRequest();
            setProfessors(professorsResponse.data);
        } catch (error) {
            console.log(error);
        }
    },[])

    useEffect(() => {
        renderProfessors();
    }, [renderProfessors]);


    if (!professors?.length) {
        return '';
    }

    return (
        <>
            <CardGeneric>
                {professors.map((professor) => {
                    return (
                        <ProfessorsComponent professor={professor.name} id={professor.id} />
                    )
                })}
            </CardGeneric>
        </>
    )
}
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
