import { MainLayout } from '../../layouts/MainLayout'
import { Row, Col, Card, Tab, Nav, CardDeck } from 'react-bootstrap'

import { doctors } from '../../data/persons/doctors'
import { administrators } from '../../data/persons/administrators'
import { trainers } from '../../data/persons/trainers'

import classes from '../../styles/persons.module.scss'

export default function PersonsPage() {
    return (
        <MainLayout
            title='Sales page'
            description='Description for Sales page'
        >
            <Tab.Container id="persons_cards" defaultActiveKey="first" >
                <Row className="justify-content-md-center" >
                    <Nav variant="pills" className={classes.persons_cards_pills}>
                        <Col lg='auto'>
                            <Nav.Item>
                                <Nav.Link eventKey="first">Doctors</Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col lg='auto'>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Administrators</Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col lg='auto'>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Trainers</Nav.Link>
                    </Nav.Item>
                </Col>
                    </Nav>
                </Row>
                <Row className="justify-content-md-center">
                    <Col>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Card>
                                    <Card.Header>
                                        Doctors
                                    </Card.Header>
                                    <Card.Body>
                                        <CardDeck>
                                            {doctors.map(person => {
                                                return(
                                                    <Card key={person.id}>
                                                        <Card.Img variant="top" src={person.img} />
                                                        <Card.Body>
                                                        <Card.Title>{person.FIO}</Card.Title>
                                                        <Card.Text>
                                                            {person.text}
                                                        </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                )
                                            })}
                                        </CardDeck>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Card>
                                    <Card.Header>
                                        Administrators
                                    </Card.Header>
                                    <Card.Body>
                                        <CardDeck>
                                            {administrators.map(person => {
                                                return(
                                                    <Card key={person.id}>
                                                        <Card.Img variant="top" src={person.img} />
                                                        <Card.Body>
                                                        <Card.Title>{person.FIO}</Card.Title>
                                                        <Card.Text>
                                                            {person.text}
                                                        </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                )
                                            })}                                        
                                        </CardDeck>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Card>
                                    <Card.Header>
                                        Trainers
                                    </Card.Header>
                                    <Card.Body>
                                        <CardDeck>
                                            {trainers.map(person => {
                                                return(
                                                    <Card key={person.id}>
                                                        <Card.Img variant="top" src={person.img} />
                                                        <Card.Body>
                                                        <Card.Title>{person.FIO}</Card.Title>
                                                        <Card.Text>
                                                            {person.text}
                                                        </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                )
                                            })}                                        
                                        </CardDeck>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </MainLayout>
    )
} 