import React from 'react'
import { Card, Button } from 'react-bootstrap'

import { SocialLinks } from '../Footer/SocialLinks'

export function CardComponentSocialLinks( {cardHeader, cardTitle, cardText, cardAdd} ) {
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
                <SocialLinks />
            </Card.Body>
        </Card>
    )
}