import { MainLayout } from '../../layouts/MainLayout'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'
import { CardComponentWithoutHeader } from '../../components/CardComponents/CardComponentWithoutHeader'

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
            {
                rules.map( elem => {
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