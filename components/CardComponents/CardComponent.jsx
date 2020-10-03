import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { ModalCallback } from '../Modal_Callback/Modal_Callback'
import ReactMarkdown from "react-markdown";

// import styles
import style from '../../styles/components/CardComponentImg.module.scss' 

// TODO: rename CardComponent and CardComponentImg ... and all Components
export function CardComponent ( {cardHeader, cardTitle, cardText, cardImg} ) {
    return (
        <Card>
            <Card.Header
                className={` card_component_header `}
            >
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
            <Card.Img 
                src={cardImg} 
                variant="bottom"
                className={`${style.height}`}
            />
        </Card>
    )
}