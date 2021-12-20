import styled from 'styled-components';
import { getProfessorsRequest, getProfessorsTestsRequest } from '../../Services/RepoProvas';
import { ButtonChoice, Card } from '../Homepage.js/HomePageStyled';
import { useState, useEffect, useCallback, useMemo} from 'react';
import ProfessorsComponent from './ProfessorsComponent';

export default function TestsByProfessorPage() {
    
    const [professors, setProfessors] = useState(null);

    const [professorsInfo, setProfessorsInfo] = useState([]);
    // [1,2,3].reduce((a,b,i,o) => { return a + b}, 0)

    const renderProfessors = useCallback(async () => {
        try {
            let professorsResponse = await getProfessorsRequest();
            // console.log(professorsResponse.data)
            setProfessors(professorsResponse.data);
        } catch (error) {
            console.log(error);
        }
    },[])

    const getInfoProfessorsList = useCallback(async (id) => {
        
        try {
            const one = await getProfessorsTestsRequest(1);
            const two = await getProfessorsTestsRequest(2);
            const three = await getProfessorsTestsRequest(3);
            const four = await getProfessorsTestsRequest(4);
            const five = await getProfessorsTestsRequest(5);
            const six =  await getProfessorsTestsRequest(6);
            const seven = await getProfessorsTestsRequest(7);
            const eight = await getProfessorsTestsRequest(8);

            console.log(one.data);
            console.log(two.data);
            // console.log(three.data);
            // console.log(four.data);
            // console.log(five.data);
            // console.log(six.data);
            // console.log(seven.data);
            // console.log(eight.data);

            setProfessorsInfo([...professorsInfo, ((one.data.map((d) => { return d.tests.length })).reduce((a, b) => { return a + b }, 0))]);
            setProfessorsInfo([...professorsInfo, ((two.data.map((d) => { return d.tests.length })).reduce((a, b) => { return a + b }, 0))]);
            // setProfessorsInfo([...professorsInfo, ((three.data.map((d) => { return d.tests.length })).reduce((a, b) => { return a + b }, 0))]);
            // setProfessorsInfo([...professorsInfo, ((four.data.map((d) => { return d.tests.length })).reduce((a, b) => { return a + b }, 0))]);
            // setProfessorsInfo([...professorsInfo, ((five.data.map((d) => { return d.tests.length })).reduce((a, b) => { return a + b }, 0))]);
            // setProfessorsInfo([...professorsInfo, ((six.data.map((d) => { return d.tests.length })).reduce((a, b) => { return a + b }, 0))]);
            // setProfessorsInfo([...professorsInfo, ((seven.data.map((d) => { return d.tests.length })).reduce((a, b) => { return a + b }, 0))]);
            // setProfessorsInfo([...professorsInfo, ((eight.data.map((d) => { return d.tests.length })).reduce((a, b) => { return a + b }, 0))]);

            
            console.log(professorsInfo);
            /*if (!res.data?.length) {
                // console.log('vazio');
                // console.log([...professorsInfo]);
                setProfessorsInfo([...professorsInfo, 0]);
                // return;
            }
            setProfessorsInfo([...professorsInfo, ((res.data.map((d) => { return d.tests.length })).reduce((a, b) => { return a + b }, 0))]);
            // professorsInfo.noneber.push({count: ((res.data.map((d) => { return d.tests.length })).reduce((a, b) => { return a + b }, 0))});
            console.log('aqui', res.data);*/
        } catch (error) {
            console.log(error);
        }
    }, [])

    useEffect(() => {
        renderProfessors();
    }, [renderProfessors]);

    async function getInfo(array) {

        const counts = [...Array(array.length).keys()].map((e) => e + 1)
        console.log(array);
        console.log(counts);
        try {
            console.log('esperando...')
            let res = await getProfessorsTestsRequest(1);
            console.log('foi...')
            console.log('res: ', (res.data.map((d) => { return d.tests.length })).reduce((a, b) => { return a + b }, 0));
            console.log('comoStr', ((res.data.map((d) => { return d.tests.length })).reduce((a, b) => { return a + b }, 0)))
            
            setProfessors({id: 2, name:'junin'})
            // professors?.map((professor) => professor.id === 1 ? { ...professors, count: ((res.data.map((d) => { return d.tests.length })).reduce((a, b) => { return a + b }, 0)) } : professor)
            
            console.log('professorXXX', professors);
            
            return 'beijo'
        } catch (error) {
            console.log(error);
            return '';
        }
    }

    if (!professors?.length) {
        console.log('aqui')
        return '';
    }

    // console.log('aqui', professors)
    // , { av: 'P2' }, { av: 'P3' }, { av: '2ch' }, { av: 'Outras' } ];
    return (
        <>
            <CardGeneric>
                {professors.map((professor) => {
                    return (
                        <ProfessorsComponent professor={professor.name} id={professor.id} setProfessorsInfo={setProfessorsInfo} />
                    )
                })}
        </CardGeneric>
        <CardGeneric>
                {/* {av.map((e) => <ButtonChoice>{e.av} {e.proves.map((prova) => { return <ButtonChoice>{prova.disciplineName} <p>{prova.name}</p> <p>{prova.link}</p></ButtonChoice> })}</ButtonChoice>)} */}
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

    button{
        width: 80%;
        margin: 15px 0px;
    }
`;
