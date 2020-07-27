import { MainLayout } from '../../layouts/MainLayout'
import { CardComponent } from '../../components/CardComponent'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
// import { Card, Button } from 'react-bootstrap'

const fetcher = async (url) => {

    const res = await fetch(url)
    const data = await res.json()

    if (res.status !== 200) {
        throw new Error(data.message)
    }

    return data
}

export default function Person() {
    const { query } = useRouter()
    console.log(query)
    const { data, error } = useSWR(
        () => query.additional && `/api/additional/${query.additional}`,
        fetcher
    )

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading...</div>

    return (
        // <MainLayout >
        //     <Card>
        //         <Card.Header>{`Header for card ${data.id}`}</Card.Header>
        //         <Card.Body>
        //             <Card.Title>{data.title}</Card.Title>
        //             {data.text}
        //         </Card.Body>
        //     </Card>

        // </MainLayout>
        <MainLayout
            title={data.title}
            description={`Description for ${data.id} page`}
        >
            <CardComponent
                cardHeader={data.title}
                cardText={data.text}
            />
        </MainLayout>
    )
}
