import { MainLayout } from '../../layouts/MainLayout'
import { CardComponentWithoutHeader } from '../../components/CardComponents/CardComponentWithoutHeader'

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
                        <CardComponentWithoutHeader
                            key={elem.id}
                            cardTitle={elem.title}
                            cardText={elem.text}
                        />
                    )
                })
            }
        </MainLayout>
    )
}  