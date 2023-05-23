import axios from "axios";
import styled from "styled-components";
import { useState } from 'react';
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

import NavbarUnlogged from "../components/NavBarUnlogged";

export default function SignUp(){
    
    const api = axios.create();
    const Navigate = useNavigate();
    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ confirmPassword, setConfirmPassword ] = useState();

    function Cadastrar(name, email, password, confirmPassword){
        const body = {name, email, password, confirmPassword};
        
        api.post(`${process.env.REACT_APP_API_URL}/signup`, body)
            .then((res) => {
                alert("Usuário Criado");
                Navigate('/signin');
            })
            .catch((error) => {alert(error.response.data)});
    }

    return (
        <Container>
            <NavbarUnlogged />
            <Logo />
            <Form>
                <input placeholder="Nome" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input placeholder="Confirmar Senha" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                <button onClick={() => {Cadastrar(name, email, password, confirmPassword)}}>Criar Conta</button>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin: auto;

    input {
        box-sizing: border-box;

        width: 769px;
        height: 60px;

        padding-left: 22px;
        font-size: large;
        ::placeholder{
            color: #9C9C9C;
        }

        background: #FFFFFF;
        border: 1px solid rgba(120, 177, 89, 0.25);
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 12px;
    }

    button {
        width: 182px;
        height: 60px;
        margin: 50px auto 0 auto;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        color: #FFFFFF;

        background: #5D9040;
        border: none;
        border-radius: 12px;
    }
`