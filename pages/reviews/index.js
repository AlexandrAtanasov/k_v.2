import { MainLayout } from '../../layouts/MainLayout'
import { CardComponentSocialLinks } from '../../components/CardComponents/CardComponentSocialLinks'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'
// import data
import { reviews }  from '../../data/pages/reviews/reviews'

export default function ReviewsPage() {
    return (
        <MainLayout
            title='Reviews page'
            description='Description for Reviews page'
        >
            <HeadingComponent 
                heading='Reviews Page'
            />
            <CardComponentSocialLinks
                cardTitle={reviews[0].title}
                cardText={reviews[0].text}
            />
        </MainLayout>
    )
}  