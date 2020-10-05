import { MainLayout } from '../../layouts/MainLayout'
import { CardComponentWithoutHeader } from '../../components/CardComponents/CardComponentWithoutHeader'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'

// import data
import { organizations } from '../../data/pages/organizations/organizations'

export default function OrganizationsPage() {
    return (
        <MainLayout
            title='Organizations Page'
            description='Description for Organizations page'
        >
            <HeadingComponent 
                heading='Organizations Page'
            />
            {
                organizations.map( elem => {
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