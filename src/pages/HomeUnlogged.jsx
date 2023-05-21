import styled from "styled-components";
import NavbarUnlogged from "../components/NavBarUnlogged";
import Logo from "../components/Logo";
import RankLogo from "../components/RankLogo";
import Rank from "../components/Rank";


export default function Home(){
    
    return (
        <Container>
            <NavbarUnlogged />
            <Logo />
            <RankLogo />
            <Rank />

        <h1>Crie sua conta para usar nosso serviço!</h1>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    margin: 0;
    padding: 0;

    h1{
        margin: 15px auto;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;

    color: #000000;
    }
`