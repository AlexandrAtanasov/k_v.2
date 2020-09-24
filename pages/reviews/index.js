import { MainLayout } from '../../layouts/MainLayout'
import { CardComponentSocialLinks } from '../../components/CardComponents/CardComponentSocialLinks'
// import data
import { reviews }  from '../../data/reviews/reviews'

export default function ReviewsPage() {
    return (
        <MainLayout
            title='Reviews page'
            description='Description for Reviews page'
        >
            <CardComponentSocialLinks
                cardHeader={reviews[0].header}
                cardTitle={reviews[0].title}
                cardText={reviews[0].text}
            />
        </MainLayout>
    )
}  