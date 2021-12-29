import { CardDeck, Card, Container } from 'react-bootstrap'
import ReactMarkdown from "react-markdown";

// import styles 
import style_heading from '../../styles/components/HeadingComponent.module.scss'
import style from '../../styles/components/CardDeckComponent.module.scss'


// import data


export function MainVideo( ) {

    return (
        <Container
        style={{marginTop: '0.5rem', marginBottom:'56px'}}
        >
            <video controls width="100%" poster="/video/NewYear.jpg" loop controls="controls" muted autoplay="autoplay">
                <source src="/video/NewYear.MP4" type="video/mp4"/>
            </video>
        </Container>
    )
}