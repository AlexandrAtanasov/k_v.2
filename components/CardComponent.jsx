import React from 'react'
import Link from 'next/link'
import { Card, Button } from 'react-bootstrap'

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
                <Button variant="primary">
                    Go somewhere
                </Button>
            </Card.Body>
        </Card>
    )
}