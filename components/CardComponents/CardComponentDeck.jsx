import { CardDeck, Card } from 'react-bootstrap'
import ReactMarkdown from "react-markdown";

// import styles
import style from '../../styles/components/CardDeckComponent.module.scss'


export function CardComponentDeck( {data} ) {
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
                                <ReactMarkdown
                                    source={elem.text} 
                                />
                                </Card.Body>
                            </Card>
                        )
                    })}
                </CardDeck>
            </Card.Body>
        </Card>
    )
}