import React from 'react'
import { Card, Button } from 'react-bootstrap'
import ReactMarkdown from "react-markdown";
import { SocialLinks } from '../Footer/SocialLinks'

export function CardComponentSocialLinks( {cardTitle, cardText} ) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    {cardTitle}
                </Card.Title>
                <ReactMarkdown
                    source={cardText} 
                />
                <SocialLinks />
            </Card.Body>
        </Card>
    )
}