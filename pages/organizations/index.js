import { MainLayout } from '../../layouts/MainLayout'
import { CardComponentWithoutHeader } from '../../components/CardComponents/CardComponentWithoutHeader'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'
import ReactMarkdown from "react-markdown";
import { Card } from 'react-bootstrap'


// import data
import { organizations } from '../../data/pages/organizations/organizations'

export default function OrganizationsPage() {
    return (
        <MainLayout
            title='Вышетоящие организации'
            description='Кинезис - центр кинезитерапии. Адреса и телефоны надзорных органов и вышестоящих организаций.'
        >
            <HeadingComponent 
                heading='Вышетоящие организации'
            />
            {
                organizations.map( elem => {
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
                        </Card>
                    )
                })
            }
        </MainLayout>
    )
}  