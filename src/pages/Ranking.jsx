import styled from "styled-components";

import Navbar from "../components/NavBar";
import Logo from "../components/Logo";
import RankLogo from "../components/RankLogo";
import Rank from "../components/Rank";

export default function Ranking(props){
    const {name} = props;

    return (
        <Container>
            <Navbar name={name} />
            <Logo />
            <RankLogo />
            <Rank />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    margin: 0;
    padding: 0;
`