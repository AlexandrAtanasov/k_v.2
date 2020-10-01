import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { ModalCallback } from '../Modal_Callback/Modal_Callback'
import ReactMarkdown from "react-markdown";

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
                <ReactMarkdown
                    source={cardText} 
                />
                <Button className="button_green_color" href="#callback">
                    <ModalCallback />
                </Button>
            </Card.Body>
        </Card>
    )
}