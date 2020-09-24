import { MainLayout } from '../../layouts/MainLayout'
import { Card } from 'react-bootstrap'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'

// import data
import { rules } from '../../data/rules/rules'

export default function RulesPage() {
    return (
        <MainLayout
            title='Rules page'
            description='Description for rules page'
        >
            <HeadingComponent 
                heading='Rules Page'
            />
            <Card key={rules[0].id}>
                <Card.Body>
                    <Card.Title>
                        {rules[0].title}
                    </Card.Title>
                    <Card.Text>
                        {rules[0].text}
                    </Card.Text>
                    <Card.Text>
                        <a href='/download_data/rules/Some rules here.pdf' target="_blank">Download some rules</a>
                    </Card.Text>
                    <Card.Text>
                        <a href='/download_data/rules/Some rules here.pdf' target="_blank">Download another rules</a>
                    </Card.Text>
                </Card.Body>
            </Card>
            
        </MainLayout>
    )
}  