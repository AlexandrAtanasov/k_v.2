import { CardDeck, Card } from 'react-bootstrap'

import style from '../styles/components/CardDeckComponent.module.scss'


export function CardDeckComponent( {data} ) {
    const elements = data;

// TODO: styles module
// TODO: component for card with card deck for persons, licences, persons on main page 
    return (
        <Card 
            className={`${style.margin}`}
            border="light" 
        >
            <Card.Body>
                <CardDeck>
                    {elements.map(elem => {
                        return(
                            <Card key={elem.id}>
                                <Card.Img variant="top" src={elem.img} />
                                <Card.Body>
                                <Card.Title>
                                    {elem.title}
                                </Card.Title>
                                <Card.Text>
                                    {elem.text}
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </CardDeck>
            </Card.Body>
        </Card>
    )
}