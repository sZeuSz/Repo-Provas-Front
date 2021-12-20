import styled from 'styled-components';
import {GiFiles} from 'react-icons/gi';
import { Title } from '../shared/TopBar';

export const Container = styled.div`
    opacity: ${({choice}) => choice ? '0.5' : '1'};
    width: auto;
    height: auto;
`;

export const Main = styled.main`  
`;

export const FilesIcon = styled(GiFiles)`
    margin-right: 10px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 500px;
    max-width: 850px;
    width: 100%;
    margin: 20px auto;
    border-radius: 25px;
    background-color: #343434;
`;


export const CardChoice = styled(Card)`
    display: ${({ choice }) => choice ? 'flex' : 'none'};
    width: 450px;
    min-height: 250px;
    height: 50px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%)
`;

export const SubTitle = styled(Title)`
    width: 80%;
    font-size: 41px;
    text-align: start;
    padding: 40px 40px 40px 40px;
`;

export const ParagraphInf = styled(SubTitle)`
    font-weight: 400;
    font-size: 18px;
    width: 80%;
    padding: 0px 0px 40px 0px;
    text-align: justify;
`;

export const ButtonsDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-self: end;
    justify-self: end;
    width: 60%;
    margin: 0 auto;
`;

export const ButtonChoice = styled.button`
    background-color: #7FFFD4;
    max-width: 250px;
    width: 250px;
    height: 60px;
    font-size: 18px;
    font-weight: 700;
    border-radius: 25px;
    margin: 0 4px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    &:hover{
        cursor: pointer;
        filter: brightness(150%);
        box-shadow: 0px 10px 0px 0px rgba(0, 0, 0, 1.2);
    }
`;