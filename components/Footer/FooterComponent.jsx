import React from 'react'
import Link from 'next/link'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'

import { SocialLinks } from './SocialLinks'
import { FooterContacts } from './FooterContacts'
import { ModalCallback } from '../Modal_Callback/Modal_Callback'

export function FooterComponent() {
    return (
        <footer className='footer mt-auto py-3 bg-dark text-white'>

            <Container className="text-center">
                <Row className="justify-content-md-center">
                    <Col>
                        LTD
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <SocialLinks />
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