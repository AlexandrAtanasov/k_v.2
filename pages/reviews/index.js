import { MainLayout } from '../../layouts/MainLayout'
import { CardComponentSocialLinks } from '../../components/CardComponents/CardComponentSocialLinks'
import { HeadingComponent } from '../../components/Heading/HeadingComponent'
// import data
import { reviews }  from '../../data/pages/reviews/reviews'

export default function ReviewsPage() {
    return (
        <MainLayout
            title='Отзывы'
            description='Отзывы о центрах Кинезис'
        >
            <HeadingComponent 
                heading='Отзывы'
            />
            <CardComponentSocialLinks
                cardTitle={reviews[0].title}
                cardText={reviews[0].text}
            />
        </MainLayout>
    )
}  