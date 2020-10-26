import React from 'react'
import { Card } from 'react-bootstrap'
import ReactMarkdown from "react-markdown";

// import styles
import style from '../../styles/components/CardComponentImg.module.scss' 

export function CardComponentWithoutHeader ( {cardTitle, cardText, cardImg} ) {
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
            <Card.Img 
                src={cardImg} 
                variant="bottom"
                className={`${style.height}`}
            />
        </Card>
    )
}