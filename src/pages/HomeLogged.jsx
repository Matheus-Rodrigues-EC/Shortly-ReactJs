import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/NavBar";
import Logo from "../components/Logo";
import ListLinks from "../components/ListLinks";

export default function Home(props){

    const {name, setName} = props;

    const api = axios.create();
    const token = localStorage.getItem("token");
    const Navigate = useNavigate();
    const [links, setLinks] = useState([]);
    const [url, setUrl] = useState();


    useEffect(() => {
        api.get(`${process.env.REACT_APP_API_URL}/users/me`, 
            {
                headers: {
                    'Authorization': `Baerer ${token}` 
                }
            }
        )
            .then((res) => {
                setName(res.data.name);
                setLinks(res.data.shortenedUrls);
            })
            .catch((error) => {
                alert(error.response.data);
                Navigate('/');
            })

    }, [api, token, links, name, setName, Navigate]);

    function sendUrl(url){
        const body = {url};
        api.post(`${process.env.REACT_APP_API_URL}/urls/shorten`, body,
            {
                headers: {
                    'Authorization': `Baerer ${token}` 
                }
            }
        )
            .then((res) => {})
            .catch((error) => {
                alert(error.response.data);
            })
    }
    
    return (
        <Container>
            <Navbar name={name} />
            <Logo />
            <Encurtador>
                <input 
                    type="url" 
                    placeholder="Links que cabem no bolso" 
                    value={url} 
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button onClick={() => {sendUrl(url)}}>Encurtar Link</button>
            </Encurtador>
            <ListLinks links={links} />
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

const Encurtador = styled.div`
    display: flex;
    gap: 70px;
    margin: 75px auto 50px auto;
    

    input{
        box-sizing: border-box;

        width: 769px;
        height: 60px;

        padding-left: 25px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;

        background: #FFFFFF;
        border: 1px solid rgba(120, 177, 89, 0.25);
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 12px;
        ::placeholder{
            color: #9C9C9C;
        }
    }

    button {
        width: 182px;
        height: 60px;
        cursor: pointer;

        background: #5D9040;
        border: none;
        border-radius: 12px;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        color: #FFFFFF;
    }

`