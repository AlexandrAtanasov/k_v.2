import React from 'react'
import { Card, Button } from 'react-bootstrap'

import { Carousel } from 'react-bootstrap'
import { ModalCallback } from '../Modal_Callback/Modal_Callback'
import { ModalContacts } from '../Modal_Contacts/Modal_Contacts'
import ReactMarkdown from "react-markdown";

// import styles
import style from '../../styles/contacts_page.module.scss'
import style_img from '../../styles/components/CardComponentImg.module.scss' 

export function CardComponentContacts ( {data} ) {
    const elem = data;

    return (
        <Card>
            <Card.Img 
                src={elem.img} 
                variant="bottom"
                className={`${style_img.height}`}
            />
            <Card.Body>
                <Card.Title>
                    {elem.title}
                </Card.Title>
                <ReactMarkdown
                    source={elem.text} 
                />
                <div>
                    <script type="text/javascript" charSet="utf-8" async src={`${elem.map}`}></script>
                </div>
            </Card.Body>
            <div className={` ${style.div_for_button} `} >
                <Button className="button_green_color" href="#callback">
                    <ModalCallback />
                </Button>
            </div>
            <div className={` ${style.div_for_button} `}>
                <Button className="button_green_color" href="#callToCenters">
                    <ModalContacts />
                </Button>
            </div>
        </Card>
    )
}