import styled from 'styled-components';
import {GiFiles} from 'react-icons/gi';
export default function TopBar() {
    
    return (
        <Header>
                <Title>
                    <FilesIcon/> RepoProvas
                </Title>
        </Header>
    )
}

export const Header = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 60px;
    background-color: #343434;
`;

export const Title = styled.h1`
    font-size: 40px;
    font-weight: 700;
    color: #7FFFD4;
    margin-left: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: justify;
    margin: 0 auto;
`;

export const FilesIcon = styled(GiFiles)`
    margin-right: 10px;
`;
