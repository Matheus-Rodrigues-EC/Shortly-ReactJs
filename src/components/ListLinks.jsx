import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import Trash from "../assets/Trash.png"

export default function ListLinks(props){
    const {links} = props;

    const api = axios.create();
    const token = localStorage.getItem("token");

    useEffect(() => {

    }, [links])

    function delteLink(id){
        api.delete(`${process.env.REACT_APP_API_URL}/urls/${id}`,
            {
                headers: {
                    'Authorization': `Baerer ${token}` 
                }
            }
        )
            .then((res) => {
                alert("Link deletado");
            })
            .catch((error) => {alert(error.response.data)});
    }


    function followLink(shortUrl){
        api.get(`${process.env.REACT_APP_API_URL}/urls/open/${shortUrl}`)
            .then((res) => {alert(res.data)})
            .catch((error) => {alert(error.message)})
    }

    return (
        <Container>
            {links.map((item) => {
                return (
                    <Encurtado key={item.id}>
                        <Infos>
                            <p> { item.url } </p>
                            <p onClick={() => {followLink(item.shortUrl)}}> { item.shortUrl } </p>
                            <p> Quantidade de visitantes: { item.visitCount } </p>
                        </Infos>
                        <button onClick={() => {delteLink(item.id)}}><img src={Trash} alt="Referência a uma lixeira" /></button>
                    </Encurtado>
                )
            })}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    margin: 0;
    padding: 0;

    gap: 25px;
`
const Encurtado = styled.div`
    display: flex;
    margin: auto;

    button{
        width: 130px;
        height: 60px;
        left: 1135px;
        top: 452px;

        background: #FFFFFF;
        border: 1px solid rgba(120, 177, 89, 0.25);
        border-radius: 12px;

        cursor: pointer;
        img{
            width: 22px;
        }
    }
`

const Infos = styled.div`
    display: flex;
    width: 887px;
    height: 60px;
    justify-content: space-between;
    align-items: center;

    background: #80CC74;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px 0px 0px 12px;
    padding: 0 25px;
    box-sizing: border-box;

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        width: 30%;
        padding: 3px 0;
        cursor: pointer;

        color: #FFFFFF;

        text-align: center;
    }
`