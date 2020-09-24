import React from 'react'
import { Card } from 'react-bootstrap'

export function CardComponentWithoutHeader ( {cardTitle, cardText} ) {
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
        </Card>
    )
}