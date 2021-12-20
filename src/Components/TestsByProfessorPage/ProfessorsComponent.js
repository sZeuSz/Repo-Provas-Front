import styled from 'styled-components';
import { ButtonChoice, Card } from '../Homepage.js/HomePageStyled';
import { useState, useEffect, useCallback } from 'react';
import { getProfessorsTestsRequest } from '../../Services/RepoProvas';


export default function ProfessorsComponent({professor, id, setProfessorsInfo}) {

    const [teacherComplete, setTeacherComplete] = useState([professor]);
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
        <ButtonChoice>{teacherComplete[0]}{console.log(teacherComplete)}({((teacherComplete[1]?.map((d) => { return d.tests.length }))?.reduce((a, b) => { return a + b }, 0))})</ButtonChoice>
    )
}

