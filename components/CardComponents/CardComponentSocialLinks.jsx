import React from 'react'
import { Card } from 'react-bootstrap'
import ReactMarkdown from "react-markdown";
import { SocialLinksComponent } from '../Footer/SocialLinksComponent'

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
                <SocialLinksComponent />
            </Card.Body>
        </Card>
    )
}