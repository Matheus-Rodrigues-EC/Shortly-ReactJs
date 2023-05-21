import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/NavBar";
import Logo from "../components/Logo";

export default function Home(){

    const api = axios.create();
    const token = localStorage.getItem("token");
    const Navigate = useNavigate();
    const [name, setName] = useState();


    useEffect(() => {
        api.get(`${process.env.REACT_APP_API_URL}/users/me`, 
            {
                headers: {
                    'Authorization': `Baerer ${token}` 
                }
            }
        )
            .then((res) => {
                console.log(res.data);
                setName(res.data.name);
            })
            .catch((error) => {})

    }, [api, token, Navigate])
    
    return (
        <Container>
            <Navbar name={name} />
            <Logo />
            <h1>Home Page</h1>
        </Container>
    )
}

const Container = styled.div`
    background-color: #FFFFFF;
    margin: 0;
    padding: 0;
`