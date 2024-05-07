import {useEffect, useState} from "react";
import {getCoinsInfo} from "../data";
import styled from "styled-components";


export default function AppContent() {
    let [data, setData] = useState([])

    useEffect(() => {
        getCoinsInfo()
            .then(result => {
                setData(result.result)
            })
    }, [])

    const Container = styled.div`
        width: 100%;
    `

    return (
        <Container>
            {
                data.map((value, index) => {
                    return <div key={index}>{value.id}</div>
                })
            }
        </Container>
    )
}