import { MainLayout } from '../../layouts/MainLayout'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'
import { CardComponent } from '../../components/CardComponents/CardComponent'

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