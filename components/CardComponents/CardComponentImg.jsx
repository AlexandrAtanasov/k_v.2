import React from 'react'
import { Card } from 'react-bootstrap'
import ReactMarkdown from "react-markdown";

export function CardComponentImg( {cardTitle, cardText, cardImg} ) {
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
            {/* TODO: make image not so high */}
            <Card.Img variant="bottom" src={cardImg} />
        </Card>
    )
}