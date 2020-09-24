import { MainLayout } from '../../layouts/MainLayout'
import { Card } from 'react-bootstrap'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'

// import data
import { radio } from '../../data/radio/radio'

export default function RadioPage() {
    return (
        <MainLayout
            title='Radio page'
            description='Description for Radio page'
        >
            <HeadingComponent 
                heading='Radio Page'
            />
            {
                radio.map( elem => {
                    return (
                        <Card key={elem.id}>
                            <Card.Body>
                                <Card.Title>
                                    {elem.title}
                                </Card.Title>
                                <Card.Text>
                                    {elem.text}
                                </Card.Text>
                                <audio controls src={elem.src}></audio>
                            </Card.Body>
                        </Card>
                    )
                })
            }
        </MainLayout>
    )
}  