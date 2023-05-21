import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export default function Navbar(props){
    const {name} = props;
    const Navigate = useNavigate();

    function Sair(){
        localStorage.removeItem("token");
        alert("Sessão encerrada.")
        Navigate("/");
    }

    return (
        <Container>
            <h2>Seja bem-vindo(a), {name}</h2>
            <Buttons>
                <ButtonNavBar onClick={() => {Navigate('/home')}}>Home</ButtonNavBar>
            
                <ButtonNavBar onClick={() => {Navigate('/ranking')}}>Ranking</ButtonNavBar>

                <ButtonNavBar onClick={() => {Sair()}}>Sair</ButtonNavBar>
            </Buttons>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    background-color: #FFFFFF;
    margin: 0;
    padding: 0;

    width: 100%;
    height: 80px;

    align-items: center;

    h2 {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        margin: auto;

        color: #5D9040;
        text-decoration: none;

        cursor: pointer;
    }
`

const Buttons = styled.div`
    display: flex;
    margin: auto;
    gap: 25px;
    align-items: inherit;
`
const ButtonNavBar = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;

    color: #9C9C9C;
    text-decoration: none;

    cursor: pointer;
`

