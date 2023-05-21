import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export default function NavbarUnlogged(){
    const Navigate = useNavigate();

    return (
        <Container>
            <Buttons>
                <ButtonNavBar onClick={() => {Navigate('/signin')}}>Entrar</ButtonNavBar>
            
                <ButtonNavBar onClick={() => {Navigate('/signup')}}>Cadastrar-se</ButtonNavBar>
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
`

const Buttons = styled.div`
    display: flex;
    margin: 0 10% 0 auto;
    gap: 25px;
    align-items: center;
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
