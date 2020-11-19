import { MainLayout } from '../../layouts/MainLayout'
// import { CardComponentWithoutHeader } from '../../components/CardComponents/CardComponentWithoutHeader'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'
import ReactMarkdown from "react-markdown";
import { Card } from 'react-bootstrap'

// import data
import { vacancy } from '../../data/pages/vacancy/vacancy'


// TODO: реализовать такую же схему, как на страницах "решаемые проблемы" и "дополнительные услуги"
export default function VacancyPage() {
    return (
        <MainLayout
            title='Вакансии'
            description='Активные вакансии в сети центров кинезитерапии Кинезис'
        >
            <HeadingComponent 
                heading='Вакансии'
            />
            {
                vacancy.map( elem => {
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