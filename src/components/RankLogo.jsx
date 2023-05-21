import styled from "styled-components";

import Rank from '../assets/Rank.png';

export default function RankLogo(){

    return (
        <Container>
            <Image src={Rank} alt="Imagem ilustrativa de um troféu" />
            <Title>Ranking</Title>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    background-color: #FFFFFF;
    margin: auto;
    padding: 0;

    align-items: center;
    gap: 15px;
`

const Image = styled.img`
    width: 56px;
    height: 50px;
`

const Title = styled.h2`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
`