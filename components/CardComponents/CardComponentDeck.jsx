import { CardDeck, Card } from 'react-bootstrap'
import ReactMarkdown from "react-markdown";

// import styles
import style from '../../styles/components/CardDeckComponent.module.scss'


export function CardComponentDeck( {data} ) {
    const elements = data;

    return (
        <Card 
            className={` ${style.margin} `}
            border="light" 
        >
            <Card.Body className={` ${style.padding}`}>
                <CardDeck
                    className={`${style.deck_justify}`} 
                >
                    {elements.map(elem => {
                        return(
                            <Card 
                                key={elem.id}
                                className={`${style.min_width}`}    
                            >
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