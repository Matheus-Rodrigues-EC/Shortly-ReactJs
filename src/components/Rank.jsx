import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";


export default function Rank(){
    const api = axios.create();
    const [rank, setRank] = useState([]);

    useEffect(() => {
        api.get(`${process.env.REACT_APP_API_URL}/ranking`)
            .then((res) => {
                setRank(res.data);
            })
            .catch((error) => {
                alert(error.response.data)
            })
    }, [api, rank]);


    return (
        <Container>
            <List>
                {rank.map((user, index) => {
                    return(
                        <User key={user.id}>
                            <p>{index+1}. {user.name} - </p>
                            <p> {user.linksCount} links - </p>
                            <p> {user.visitCount} visualizações</p>
                        </User>
                    )
                })}
            </List>
            
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

const List = styled.ol`

`

const User = styled.li`
    display: flex;
    flex-direction: row;
    gap: 5px;
    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 28px;

        color: #000000;
    }
`