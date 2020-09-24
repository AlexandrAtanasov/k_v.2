import { MainLayout } from '../../layouts/MainLayout'
import { CardComponentWithoutHeader } from '../../components/CardComponents/CardComponentWithoutHeader'

// import data
import { organizations } from '../../data/organizations/organizations'

export default function OrganizationsPage() {
    return (
        <MainLayout
            title='Organizations page'
            description='Description for Organizations page'
        >
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