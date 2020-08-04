import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import { activities } from '../../data/img/main_activities/main_actvities'  

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
                {activities.map(elem => {
                    return (
                        <Col 
                            key={elem.id}
                            className="justify-content-center" >
                            <Image 
                                fluid 
                                style={{maxHeight: "3rem"}} 
                                src={elem.img} 
                            />
                            <span>
                                {elem.text}
                            </span>
                        </Col>

                    )
                })}
            </Row>
        </Container>
)
}