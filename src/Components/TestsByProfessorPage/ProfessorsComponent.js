import styled from 'styled-components';
import { ButtonChoice, Card } from '../Homepage.js/HomePageStyled';
import { useState, useEffect, useCallback } from 'react';
import { getProfessorsTestsRequest } from '../../Services/RepoProvas';
import { Link } from 'react-router-dom';


export default function ProfessorsComponent({professor, id}) {

    const [teacherComplete, setTeacherComplete] = useState([professor]);
    const [hidden, setHidden] = useState(true);
    console.log(professor);
    console.log(id);
    const generateProfessors = useCallback(() => {
    getProfessorsTestsRequest(id)
      .then((res) => {
          console.log(res.data);
          setTeacherComplete([...teacherComplete, res.data]);
      })
      .catch((error) => {});
    },[])

    useEffect(() => {
        generateProfessors();
    }, [generateProfessors])
    
    if (!teacherComplete) {
        return null;
    }

    return (
        <ContainerPT>
        <ButtonChoice onClick={() => setHidden(!hidden)}>{teacherComplete[0]}{console.log(teacherComplete)}({((teacherComplete[1]?.map((d) => { return d.tests.length }))?.reduce((a, b) => { return a + b }, 0))})</ButtonChoice>
            <CardTests hidden={hidden}>
                {teacherComplete[1]?.map((t, index) => {
                    return (
                        <ContainerCategory>
                            <Period>{t.name}</Period>
                            <ContainerTests>
                                {t?.tests.map((t) => {
                                    return (
                                        <ContainerInfo target="_blank" href={t.link} rel="noreferrer">
                                            <Discipline>{t.name}</Discipline>
                                            <Discipline>{t.discipline.name}</Discipline>
                                            <Discipline>{t.link}</Discipline>
                                        </ContainerInfo>
                                    )
                                })}
                            </ContainerTests>
                        </ContainerCategory>
                    )
                })}
            </CardTests>
        </ContainerPT>
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

const ContainerPT = styled.div`
    display:flex;
    justify-content: flex-start;
    width: 100%;
    

    @media(max-width: 834px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const Period = styled.h1`
    font-size: 20px;
    color: #87CEEB;
    text-align: center;
    height: 50px;
    display:flex;
    align-items: center;
`;

const CardTests = styled.div`
    display: ${({hidden}) =>  hidden ? 'none' : 'flex'};
    justify-content: flex-start;
    align-items: center;
    
    width: 70%;
    min-height: 50px;
    margin: 15px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);
    justify-content: space-around;
    flex-direction: column;
    
    button{
        position: relative;
        cursor:pointer;
        margin: 15px 0px;
        transition-duration: 0.4s;
        text-overflow: ellipsis;
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

    @media(max-width: 834px){
        width: 80%
    }
`;
