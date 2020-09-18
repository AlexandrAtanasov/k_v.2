import React from 'react'
import { Card } from 'react-bootstrap'

export function CardImgComponent( {cardHeader, cardTitle, cardText} ) {
    return (
        <Card>
            <Card.Header>
                {cardHeader}
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    {cardTitle}
                </Card.Title>
                <Card.Text>
                    <p>Insert here some info</p>
                    {cardText}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}