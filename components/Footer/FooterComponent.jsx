import React from 'react'
import Link from 'next/link'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'

import { SocialLinksComponent } from './SocialLinksComponent'
import { FooterContactsComponent } from './FooterContactsComponent'
import { ModalCallback } from '../Modal_Callback/Modal_Callback'
import { FooterNavComponent } from './FooterNavComponent'

// import localization data
import { local } from '../../data/localization_data/components/Footer/FooterComponent'

export function FooterComponent() {
    return (
        <footer 
            className={`footer mt-auto py-3 text-white footer_background_color`}
        >
            <Container className="text-center">
                <Row className="justify-content-md-center">
                    <Col>
                        {local.company_name}
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <SocialLinksComponent />
                    </Col>
                    <Col md="auto">
                        <FooterContactsComponent />
                    </Col>
                </Row>
                {/* <Row className="justify-content-md-center">
                    <Col md="auto">
                        <FooterNavComponent/>
                    </Col>
                </Row> */}
            </Container>

        </footer>
    )
}