import { MainLayout } from '../../layouts/MainLayout'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

export default function PersonsPage() {
    return (
        <MainLayout
            title='Sales page'
            description='Description for Sales page'
        >
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/img/carousel/img_1.png" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="auto">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/img/carousel/img_2.png" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="auto">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="/img/carousel/img_3.png" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    )
} 