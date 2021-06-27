import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { ModalCallback } from '../Modal_Callback/Modal_Callback'
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
                <Button className="button_green_color" href="#callback">
                    <ModalCallback />
                </Button>
            </Card.Body>
            {
                cardImg ? 
                    <Card.Img 
                        src={cardImg} 
                        variant="bottom"
                        className={`${style.height}`}
                    />
                : null
            }
        </Card>
    )
}