import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { ModalCallback } from '../Modal_Callback/Modal_Callback'

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
                <Button variant="success">
                    <ModalCallback />
                </Button>
            </Card.Body>
        </Card>
    )
}