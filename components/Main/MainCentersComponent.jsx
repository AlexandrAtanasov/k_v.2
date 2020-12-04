import { Card, Button } from 'react-bootstrap'
import { CardComponentImg } from '../CardComponents/CardComponentImg'
import ReactMarkdown from "react-markdown";

// import data
import { about_centers } from '../../data/main/about_centers/about_centers'


export function MainCentersComponent( ) {
    return (
        <div>
            {
                about_centers.map( elem => {
                    return (
                        <Card key={elem.id}>
                            <Card.Body>
                                <Card.Title>
                                    {elem.title}
                                </Card.Title>
                                <ReactMarkdown
                                    source={elem.text} 
                                />
                            </Card.Body>
                            <Card.Img 
                                src={elem.img} 
                                variant="bottom"
                                // className={`${style.height}`}
                            />
                        </Card>
                        )
                    })
            }
        </div>
    )
}