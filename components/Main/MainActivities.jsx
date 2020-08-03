import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'

export function MainActivities() {

    return (
        <Container fluid>
            <Row 
                className="justify-content-center" 
                // className="justify-content-md-center" 
                xs={4} 
                md={6} 
                lg={10}
                xl
            >
                <Col className="justify-content-center" ><Image style={{maxHeight: "5rem"}} src="/img/main/activities/activities (1).jpg" fluid /><span>First</span></Col>
                <Col className="justify-content-center" ><Image style={{maxHeight: "5rem"}} src="/img/main/activities/activities (2).jpg" fluid /><span>Second</span></Col>
                <Col className="justify-content-center" ><Image style={{maxHeight: "5rem"}} src="/img/main/activities/activities (3).jpg" fluid /><span>Third</span></Col>
                <Col className="justify-content-center" ><Image style={{maxHeight: "5rem"}} src="/img/main/activities/activities (4).jpg" fluid /><span>Fourth</span></Col>
                <Col className="justify-content-center" ><Image style={{maxHeight: "5rem"}} src="/img/main/activities/activities (5).jpg" fluid /><span>Fifth</span></Col>
                <Col className="justify-content-center" ><Image style={{maxHeight: "5rem"}} src="/img/main/activities/activities (6).jpg" fluid /><span>Sixth</span></Col>
                <Col className="justify-content-center" ><Image style={{maxHeight: "5rem"}} src="/img/main/activities/activities (7).jpg" fluid /><span>Seventh</span></Col>
                <Col className="justify-content-center" ><Image style={{maxHeight: "5rem"}} src="/img/main/activities/activities (8).jpg" fluid /><span>Eighth</span></Col>
                <Col className="justify-content-center" ><Image style={{maxHeight: "5rem"}} src="/img/main/activities/activities (9).jpg" fluid /><span>Ninth</span></Col>
                <Col className="justify-content-center" ><Image style={{maxHeight: "5rem"}} src="/img/main/activities/activities (10).jpg" fluid /><span>Tenth</span></Col>
            </Row>
        </Container>
)
}