import styled from "styled-components";

import Navbar from "../components/NavBar";
import Logo from "../components/Logo";
import RankLogo from "../components/RankLogo";
import Rank from "../components/Rank";

export default function Ranking(){
    
    return (
        <Container>
            <Navbar />
            <Logo />
            <RankLogo />
            <Rank />
        </Container>
    )
}

const Container = styled.div`
    background-color: #FFFFFF;
    margin: 0;
    padding: 0;
`