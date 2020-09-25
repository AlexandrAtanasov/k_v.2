import { MainLayout } from '../../layouts/MainLayout'
import { Row, Col, Tab, Nav } from 'react-bootstrap'

import { CardComponentDeck } from '../../components/CardComponents/CardComponentDeck'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'

// import data
import { doctors } from '../../data/persons/doctors'
import { administrators } from '../../data/persons/administrators'
import { trainers } from '../../data/persons/trainers'

// import styles
import classes from '../../styles/persons_page.module.scss'


export default function PersonsPage() {
    return (
        <MainLayout
            title='Persons page'
            description='Description for Persons page'
        >
            <HeadingComponent 
                heading='Persons Page'
            />
            <Tab.Container id="persons_cards" defaultActiveKey="first" >
                
                <Row className="justify-content-md-center" >
                    <Nav variant="pills" className={classes.persons_cards_pills}>
                        <Col lg='auto'>
                            <Nav.Item>
                                <Nav.Link eventKey="first" className={classes.button_outline_none}>
                                    Doctors
                                </Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col lg='auto'>
                            <Nav.Item>
                                <Nav.Link eventKey="second" className={classes.button_outline_none}>
                                    Administrators
                                </Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col lg='auto'>
                            <Nav.Item>
                                <Nav.Link eventKey="third" className={classes.button_outline_none}>
                                    Trainers
                                </Nav.Link>
                            </Nav.Item>
                        </Col>
                    </Nav>
                </Row>

                <Row className="justify-content-md-center">
                    <Col>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <CardComponentDeck 
                                    data={doctors}
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <CardComponentDeck 
                                    data={administrators}
                                />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <CardComponentDeck 
                                    data={trainers}
                                />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
                
            </Tab.Container>
        </MainLayout>
    )
} 