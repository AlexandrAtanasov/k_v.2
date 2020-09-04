import { Card, Button } from 'react-bootstrap'

import { MainLayout } from '../../layouts/MainLayout'
import { maps } from '../../data/maps/location_of_centers'

export default function LocationsPage() {
    return (
        <MainLayout
            title='How to find us'
            description='Description for locations page'
        >
            {maps.map(elem => {
                return(
                    <Card key={elem.id}>
                        <Card.Header>
                            {elem.header}
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>
                                {elem.title}
                            </Card.Title>
                            <Card.Text>
                                {elem.text}
                            </Card.Text>
                            <script type="text/javascript" charSet="utf-8" async src={`${elem.map}`}></script>
                        </Card.Body>
                    </Card>
                )
            })}
        </MainLayout>
    )
} 