import styled from "styled-components";

import Logotipo from "../assets/Logotipo.png";

export default function Logo(){

    return (
        <Container>
            <Image src={Logotipo} alt="Logotipo Shortly" />
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

const Image = styled.img`
    width: 314px;
    height: 102px;
    margin: 30px auto 30px auto;
`