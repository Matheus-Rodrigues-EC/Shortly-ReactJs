import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";


export default function Rank(){
    const api = axios.create();
    const [rank, setRank] = useState();

    useEffect(() => {
        api.get(`${process.env.REACT_APP_API_URL}/ranking`)
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [api, rank, setRank]);


    return (
        <Container>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    margin: auto;
    padding: 0;

    width: 1017px;
    height: 241px;

    background: #FFFFFF;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;

`