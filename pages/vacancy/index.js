import { MainLayout } from '../../layouts/MainLayout'
import { CardComponent } from '../../components/CardComponent'

// import data
import { vacancy } from '../../data/vacancy/vacancy'

export default function VacancyPage() {
    return (
        <MainLayout
            title='Vacancy page'
            description='Description for Vacancy page'
        >
            {
                vacancy.map( elem => {
                    return (
                        <CardComponent
                            key={elem.id}
                            cardHeader={elem.header}
                            cardTitle={elem.title}
                            cardText={elem.text}
                        />
                    )
                })
            }
        </MainLayout>
    )
}  