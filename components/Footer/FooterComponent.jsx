import React from 'react'
import Link from 'next/link'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'

import { SocialLinksComponent } from './SocialLinksComponent'
import { FooterContacts } from './FooterContacts'
import { ModalCallback } from '../Modal_Callback/Modal_Callback'

// import styles
import footer_style from '../../styles/components/FooterComponent.module.scss'

export function FooterComponent() {
    return (
        <footer 
            className={`footer mt-auto py-3 text-white footer_background_color`}
        >

            <Container className="text-center">
                <Row className="justify-content-md-center">
                    <Col>
                        LTD
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <SocialLinksComponent />
                    </Col>
                    <Col md="auto">
                        <FooterContacts />
                    </Col>
                    <Col md="auto">
                        <ListGroup variant="flush">
                            <ListGroup.Item>Sitemap</ListGroup.Item>
                            <ListGroup.Item>Other information</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}