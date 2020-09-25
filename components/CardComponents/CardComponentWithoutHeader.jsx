import React from 'react'
import { Card } from 'react-bootstrap'
import ReactMarkdown from "react-markdown";

export function CardComponentWithoutHeader ( {cardTitle, cardText} ) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    {cardTitle}
                </Card.Title>
                <ReactMarkdown
                    source={cardText} 
                />
            </Card.Body>
        </Card>
    )
}