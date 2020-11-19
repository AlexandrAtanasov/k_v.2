import { MainLayout } from '../../layouts/MainLayout'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'
// import { CardComponentWithoutHeader } from '../../components/CardComponents/CardComponentWithoutHeader'
import ReactMarkdown from "react-markdown";
import { Card } from 'react-bootstrap'

// import data
import { rules } from '../../data/pages/rules/rules'

export default function RulesPage() {
    return (
        <MainLayout
            title='Правила посещения'
            description='Правила посещения сети центров кинезитерапии Кинезис'
        >
            <HeadingComponent 
                heading='Правила посещения'
            />
            {
                rules.map( elem => {
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