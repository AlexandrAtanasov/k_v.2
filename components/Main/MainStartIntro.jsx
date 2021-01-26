import { CardDeck, Card, Container } from 'react-bootstrap'
import ReactMarkdown from "react-markdown";

// import styles 
import style_heading from '../../styles/components/HeadingComponent.module.scss'
import style from '../../styles/components/CardDeckComponent.module.scss'

// import data
import { start_intro } from '../../data/main/start_intro/start_intro'

export function MainStartIntro( ) {

    return (
        <div>
            <Container className={` ${style_heading.heading_container} `}>
                <h2 className={` ${style_heading.heading} `} >
                    Запишитесь на консультацию!
                </h2>
            </Container>
            <Container className={` ${style_heading.heading_container} `}>
                <h3 className={` ${style_heading.heading} `} >
                    Этапы консультации:
                </h3>
            </Container>

            <Card 
                className={` ${style.margin} `}
                border="light" 
            >
                <Card.Body className={` ${style.padding}`}>
                    <CardDeck
                        className={`${style.deck_justify}`} 
                    >
                        {start_intro.map(elem => {
                            return(
                                <Card 
                                    key={elem.id}
                                    className={`${style.min_width} ${style.align}`}    
                                >
                                    <Card.Img 
                                        variant="top" 
                                        src={elem.img} 
                                    />
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
        </div>
    )
}