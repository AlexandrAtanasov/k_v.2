import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { OrderCallButton } from './OrderCallButtonAndModal'

export function CardComponent( {cardHeader, cardTitle, cardText} ) {
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
                    {cardText}
                </Card.Text>
                <OrderCallButton />
            </Card.Body>
        </Card>
    )
}