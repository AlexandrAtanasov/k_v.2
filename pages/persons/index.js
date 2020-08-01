import { MainLayout } from '../../layouts/MainLayout'
import { Container, Row, Col, Card, Button, Tabs, Tab, Nav, CardDeck } from 'react-bootstrap'

import classes from '../../styles/persons.module.scss'
import { doctors } from '../../data/persons/doctors'

export default function PersonsPage() {
    console.log(doctors)
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
                                <Nav.Link eventKey="second">Admins</Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col lg='auto'>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Treners</Nav.Link>
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
                                        Docs
                                    </Card.Header>
                                    <Card.Body>
                                        <CardDeck>
                                        <Card>
                                            <Card.Img variant="top" src="holder.js/100px160" />
                                            <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This is a wider card with supporting text below as a natural lead-in to
                                                additional content. This content is a little bit longer.
                                            </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                            </Card.Footer>
                                        </Card>
                                        <Card>
                                            <Card.Img variant="top" src="holder.js/100px160" />
                                            <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This card has supporting text below as a natural lead-in to additional
                                                content.{' '}
                                            </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                            </Card.Footer>
                                        </Card>
                                        <Card>
                                            <Card.Img variant="top" src="holder.js/100px160" />
                                            <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This is a wider card with supporting text below as a natural lead-in to
                                                additional content. This card has even longer content than the first to
                                                show that equal height action.
                                            </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                            </Card.Footer>
                                        </Card>
                                        </CardDeck>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Card>
                                    <Card.Header>
                                        Adimns
                                    </Card.Header>
                                    <Card.Body>
                                        <CardDeck>
                                        <Card>
                                            <Card.Img variant="top" src="holder.js/100px160" />
                                            <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This is a wider card with supporting text below as a natural lead-in to
                                                additional content. This content is a little bit longer.
                                            </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                            </Card.Footer>
                                        </Card>
                                        <Card>
                                            <Card.Img variant="top" src="holder.js/100px160" />
                                            <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This card has supporting text below as a natural lead-in to additional
                                                content.{' '}
                                            </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                            </Card.Footer>
                                        </Card>
                                        <Card>
                                            <Card.Img variant="top" src="holder.js/100px160" />
                                            <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This is a wider card with supporting text below as a natural lead-in to
                                                additional content. This card has even longer content than the first to
                                                show that equal height action.
                                            </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                            </Card.Footer>
                                        </Card>
                                        </CardDeck>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Card>
                                    <Card.Header>
                                        Treners
                                    </Card.Header>
                                    <Card.Body>
                                        <CardDeck>
                                        <Card>
                                            <Card.Img variant="top" src="holder.js/100px160" />
                                            <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This is a wider card with supporting text below as a natural lead-in to
                                                additional content. This content is a little bit longer.
                                            </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                            </Card.Footer>
                                        </Card>
                                        <Card>
                                            <Card.Img variant="top" src="holder.js/100px160" />
                                            <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This card has supporting text below as a natural lead-in to additional
                                                content.{' '}
                                            </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                            </Card.Footer>
                                        </Card>
                                        <Card>
                                            <Card.Img variant="top" src="holder.js/100px160" />
                                            <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This is a wider card with supporting text below as a natural lead-in to
                                                additional content. This card has even longer content than the first to
                                                show that equal height action.
                                            </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                            </Card.Footer>
                                        </Card>
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