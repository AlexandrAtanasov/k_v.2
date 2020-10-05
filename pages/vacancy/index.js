import { MainLayout } from '../../layouts/MainLayout'
import { CardComponentWithoutHeader } from '../../components/CardComponents/CardComponentWithoutHeader'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'

// import data
import { vacancy } from '../../data/pages/vacancy/vacancy'

export default function VacancyPage() {
    return (
        <MainLayout
            title='Vacancy page'
            description='Description for Vacancy page'
        >
            <HeadingComponent 
                heading='Vacancy Page'
            />
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