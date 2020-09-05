import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap'

// import style from '../../styles/navigationbar.module.scss'

import { doctors } from '../data/persons/doctors'

export function LicencesComponent() {

    return (
        <div
            style={{
                marginTop: "1.5rem",
            }}
        >
                <Card 
                    border="light" 
                    style={{
                        marginLeft: "-1rem",
                        marginRight: "-1rem"
                    }}
                >
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

        </div>
    )
}