import React from 'react'
import { Card } from 'react-bootstrap'

export function CardImgComponent( {cardTitle, cardText, cardImg} ) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    {cardTitle}
                </Card.Title>
                <Card.Text>
                    
                    {cardText}
                </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={cardImg} />
        </Card>
    )
}